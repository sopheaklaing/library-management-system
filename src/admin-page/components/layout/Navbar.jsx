import React, { useState, useEffect } from 'react';
import { Menu, Search, Sun ,Bell } from 'lucide-react';
import dayjs from 'dayjs';

export default function Navbar() {
  const [datetime, setDatetime] = React.useState(
    dayjs().format('DD-MM-YYYY HH:mm:ss')
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDatetime(dayjs().format('DD-MM-YYYY HH:mm:ss'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [datePart, timePart] = datetime.split(' ');

  return (
    <div className="backdrop-blur-xl border-b border-slate-200/50 p-3.5">
      <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
        {/* Left Side */}
        <div className="flex items-center space-x-4">
          <button
            className="p-2 rounded-lg text-slate-700 hover:bg-blue-500/10 dark:text-slate-300 dark:hover:bg-blue-500/20 transition-colors"
            aria-label="Open menu"
          >
            
          </button>
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-slate-800 dark:text-slate-500">
              Dashboard
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              welcome Back, Sopheak
            </p>
          </div>
        </div>

        {/* Center: Search */}
        {/* <div className="flex-1 max-w-md mx-4 md:mx-8">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search Anything"
              className="w-full pl-10 pr-4 py-1.5 bg-slate-100 dark:bg-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-200 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div> */}

        {/* Right Side: Date, Time & Theme Toggle */}
        <div className="flex items-center space-x-4">
          <div className="font-mono text-sm text-right">
            <div className="font-bold text-slate-800 dark:text-black">{timePart}</div>
            <div className="text-slate-500 dark:text-slate-400">{datePart}</div>
          </div>
          <button
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle theme"
          >
            <Sun className="w-5 h-5" />
          </button>
          <button className='relative p-2.5 rounded-xl text-slate-400 dark:text-slate-300 
                  hiver:bg-slate-200 dark:hover:bg-slate-700 transition-colors
          '>
                  <Bell className="w-6 h-6"/>
                  <span className='absolute top-1 right-1 w-2.5 h-2.5 bg-red-300 rounded-full border-2 border-white'></span>
          </button>
        </div>
      </div>
    </div>
  );
}