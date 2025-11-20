import React, { useState } from 'react';
import {
  ChevronDown,
  LogOut,
  ChevronLeft,
  Zap,
   FileText,
  Users,
  AlertCircle,
  BookOpen,
} from 'lucide-react';
import logo from "../assets/white_palm.svg";

export default function Sidebar({ collapsed = false, onToggleCollapse, onSelectPage }) {
  const [openMenus, setOpenMenus] = useState({});
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    {
      id: "dashboard",
      Icon: Zap,
      label: "Home",
      Badge: "new"
    },
    {
      id: "manage-staff",
      Icon: FileText,
      label: "Manage Requests",
    },
    {
      id: "manage-users",
      Icon: AlertCircle,
      label: "Unreturned",
      count: "15",
    },
    {
      id: "manage-books",
      Icon: BookOpen,
      label: "Manage Books",
    }
  ];

  // Handle click
  const handleItemClick = (itemId, hasSubmenu) => {
    if (hasSubmenu) {
      toggleSubmenu(itemId);
    } else {
      setActiveItem(itemId);
      onSelectPage(itemId); // 👈 Tell App.jsx which page to show
    }
  };

  const toggleSubmenu = (menuId) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  return (
    <div
      className={`transition-all duration-300 ease-in-out bg-blue-700 backdrop-blur-xl border-r border-slate-200 dark:border-slate-700 flex flex-col relative z-10 h-screen ${
        collapsed ? 'w-20' : 'w-72'
      }`}
    >
      {/* Logo Section */}
      <div className='p-3 border-b border-slate-200/50 dark:border-slate-700/50 relative'>
        <div className={`flex items-center space-x-3 ${collapsed ? 'justify-center' : ''}`}>
          <img
            src={logo}
            alt="App Logo"
            className="w-10 h-10 rounded-xl shadow-lg"
          />
          {!collapsed && (
            <div>
              <h1 className='text-xl font-bold text-white'>libory book</h1>
              <p className='text-xs text-blue-200'>Admin Panel</p>
            </div>
          )}
        </div>

        {/* Collapse Button */}
        <button
          onClick={onToggleCollapse}
          className={`absolute -right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-500 text-white p-1 rounded-full border-2 border-white shadow-lg transition-all duration-200 ${
            collapsed ? 'rotate-180' : ''
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      {/* Menu Section */}
      <nav className='flex-1 p-4 space-y-2 overflow-y-auto'>
        {menuItems.map((item) => {
          const isActive = activeItem === item.id;
          const hasSubmenu = item.submenu;

          return (
            <div key={item.id} className='space-y-1'>
              <button
                onClick={() => handleItemClick(item.id, hasSubmenu)}
                className={`w-full flex items-center p-3 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-blue-100 hover:bg-blue-600/50 hover:text-white'
                } ${collapsed ? 'justify-center' : 'justify-between'}`}
                title={collapsed ? item.label : ''}
              >
                <div className={`flex items-center ${collapsed ? '' : 'space-x-3'}`}>
                  <item.Icon
                    className={`w-5 h-5 ${
                      isActive
                        ? 'text-white'
                        : 'text-blue-200 group-hover:text-white'
                    }`}
                  />
                  {!collapsed && <span className="font-medium">{item.label}</span>}
                </div>

                {!collapsed && (
                  <div className="flex items-center space-x-2">
                    {item.Badge && (
                      <span className="px-2 py-1 text-xs bg-green-500 text-white rounded-full">
                        {item.Badge}
                      </span>
                    )}
                    {item.count && (
                      <span className="px-2 py-1 text-xs bg-blue-500 text-white rounded-full">
                        {item.count}
                      </span>
                    )}
                  </div>
                )}
              </button>
            </div>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className='p-4 border-t border-slate-200/50 dark:border-slate-700/50'>
        <div
          className={`flex items-center ${
            collapsed ? 'justify-center' : 'space-x-3'
          } p-3 rounded-xl bg-blue-600/30 backdrop-blur-sm`}
        >
          <img
            src="https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2023/12/11/02b7857e-1a95-4b1a-8e9b-47909394da72_10d6e32f.jpg?itok=gCHeqhQr&v=1702263075"
            alt="user"
            className='w-10 h-10 rounded-full ring-2 ring-blue-400 object-cover'
          />
          {!collapsed && (
            <>
              <div className='flex-1 min-w-0'>
                <p className='text-sm font-medium text-white truncate'>
                  Sol Sopheak
                </p>
                <p className='text-xs text-blue-200 truncate'>
                  sopheak@gmail.com
                </p>
              </div>
              <button
                className="flex items-center justify-center space-x-2 p-2 rounded-lg bg-red-600/30 text-red-100 hover:bg-red-600 hover:text-white transition-all duration-200 group"
                title="Logout"
              >
                <LogOut className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </>
          )}
          {collapsed && (
            <button
              className="p-2 rounded-lg bg-red-600/30 text-red-100 hover:bg-red-600 hover:text-white transition-all duration-200"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
