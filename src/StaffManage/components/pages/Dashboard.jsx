import React from 'react';

export default function Dashboard() {
  const cards = [
    {
      title: "Add Staff",
      description: "Register new staff members",
      icon: "👥",
      gradient: "from-blue-500 to-blue-600",
      hoverGradient: "from-blue-600 to-blue-700"
    },
    {
      title: "Add User",
      description: "Create new user accounts",
      icon: "👤",
      gradient: "from-green-500 to-green-600",
      hoverGradient: "from-green-600 to-green-700"
    },
    {
      title: "Add Book",
      description: "Add books to the collection",
      icon: "📚",
      gradient: "from-purple-500 to-purple-600",
      hoverGradient: "from-purple-600 to-purple-700"
    }
  ];

  return (
    // <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
    //   <div className="max-w-7xl mx-auto">
    //     {/* Header */}
    //     <div className="mb-8">
    //       <h1 className="text-4xl font-bold text-gray-900 mb-2">
    //         Dashboard
    //       </h1>
    //       <p className="text-gray-600 text-lg">
    //         Manage your library system efficiently
    //       </p>
    //       <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full"></div>
    //     </div>

    //     {/* Cards Grid */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {cards.map((card, index) => (
    //         <div
    //           key={index}
    //           className={`
    //             group relative p-6 rounded-2xl bg-white 
    //             shadow-lg hover:shadow-2xl transition-all duration-300 
    //             transform hover:-translate-y-2 border border-gray-100
    //             cursor-pointer overflow-hidden
    //           `}
    //         >
    //           {/* Background Gradient Effect */}
    //           <div 
    //             className={`
    //               absolute inset-0 bg-gradient-to-br ${card.gradient} 
    //               opacity-0 group-hover:opacity-5 transition-opacity duration-300
    //             `}
    //           ></div>
              
    //           {/* Icon Container */}
    //           <div 
    //             className={`
    //               w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} 
    //               flex items-center justify-center text-2xl text-white 
    //               mb-4 shadow-lg transform group-hover:scale-110 
    //               transition-transform duration-300
    //             `}
    //           >
    //             {card.icon}
    //           </div>

    //           {/* Content */}
    //           <h3 className="text-xl font-bold text-gray-900 mb-2">
    //             {card.title}
    //           </h3>
    //           <p className="text-gray-600 mb-4 leading-relaxed">
    //             {card.description}
    //           </p>

    //           {/* Action Button */}
    //           <div className="flex items-center text-sm font-semibold">
    //             <span className={`text-transparent bg-clip-text bg-gradient-to-r ${card.gradient}`}>
    //               Get Started
    //             </span>
    //             <svg 
    //               className={`w-4 h-4 ml-2 text-transparent bg-clip-text bg-gradient-to-r ${card.gradient} transform group-hover:translate-x-1 transition-transform duration-300`} 
    //               fill="none" 
    //               stroke="currentColor" 
    //               viewBox="0 0 24 24"
    //             >
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    //             </svg>
    //           </div>

    //           {/* Hover Border Effect */}
    //           <div 
    //             className={`
    //               absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${card.gradient} 
    //               transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300
    //             `}
    //           ></div>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Quick Stats Section */}
    //     <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
    //       <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
    //         <div className="flex items-center justify-between">
    //           <div>
    //             <p className="text-gray-600 text-sm font-medium">Total Staff</p>
    //             <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
    //           </div>
    //           <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
    //             <span className="text-2xl">👥</span>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
    //         <div className="flex items-center justify-between">
    //           <div>
    //             <p className="text-gray-600 text-sm font-medium">Total Users</p>
    //             <p className="text-3xl font-bold text-gray-900 mt-2">1,248</p>
    //           </div>
    //           <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
    //             <span className="text-2xl">👤</span>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
    //         <div className="flex items-center justify-between">
    //           <div>
    //             <p className="text-gray-600 text-sm font-medium">Total Books</p>
    //             <p className="text-3xl font-bold text-gray-900 mt-2">5,672</p>
    //           </div>
    //           <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
    //             <span className="text-2xl">📚</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      hello work
    </div>
  );
}