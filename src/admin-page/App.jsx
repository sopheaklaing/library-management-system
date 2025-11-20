import React, { useState } from 'react';
import Header from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';

import Dashboard from './components/pages/Dashboard';
import ManageStaff from './components/pages/ManageStaff';
import ManageUsers from './components/pages/ManageUsers';
import ManageBooks from './components/pages/ManageBooks';

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
// dark:from-slate-900 dark:via-gray-900 dark:to-indigo-900
  return (
    <div className='min-h-screen bg-gradient-to-r from-slate-100 via-blue-50 to-indigo-100
    transition-all duration-500'>
      <div className='flex h-screen overflow-hidden'>
        
        {/* Sidebar */}
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggleCollapse={handleToggleSidebar}
          onSelectPage={handlePageChange}
        />

        {/* Main Content */}
        <div className='flex-1 flex flex-col overflow-hidden'>
          <Header sidebarCollapsed={sidebarCollapsed} onToggleSidebar={handleToggleSidebar} />

          <main className='flex-1 overflow-y-auto bg-transparent'>
            <div className='p-6 space-y-6'>
              {currentPage === "dashboard" && <Dashboard />}
              {currentPage === "manage-staff" && <ManageStaff />}
              {currentPage === "manage-users" && <ManageUsers />}
              {currentPage === "manage-books" && <ManageBooks />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
