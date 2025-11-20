// import React, { useState } from "react";
// import { UserPlus, Edit, Trash2 } from "lucide-react";
// import AddUserModal from "../model/User/AddUserModal";
// import EditUserModal from "../model/User/EditUserModal";
// import DeleteUserModal from "../model/User/DeleteUserModal";

// export default function ManageUsers() {
//   const [users, setUsers] = useState([
//     { id: 1, firstname: "John", lastname: "Doe", email: "john@example.com", phonenumber: "0123456789", password: "1234" },
//     { id: 2, firstname: "Jane", lastname: "Smith", email: "jane@example.com", phonenumber: "0987654321", password: "1234" },
//     { id: 3, firstname: "Anna", lastname: "Brown", email: "anna@example.com", phonenumber: "0991122334", password: "1234" },
//     { id: 4, firstname: "David", lastname: "Lee", email: "david@example.com", phonenumber: "0112233445", password: "1234" },
//     { id: 5, firstname: "Michael", lastname: "Chan", email: "michael@example.com", phonenumber: "0173344556", password: "1234" },
//     { id: 6, firstname: "Sophia", lastname: "Kim", email: "sophia@example.com", phonenumber: "0156677889", password: "1234" },
//   ]);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);

//   const [newUser, setNewUser] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     phonenumber: "",
//     password: ""
//   });

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 3;

//   const filteredUsers = users.filter(
//     (user) =>
//       user.id.toString().includes(searchTerm) ||
//       user.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.phonenumber.includes(searchTerm)
//   );

//   // Pagination logic
//   const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

//   const handleAddUser = (e) => {
//     e.preventDefault();
//     const newId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
//     setUsers([...users, { ...newUser, id: newId }]);
//     setNewUser({ firstname: "", lastname: "", email: "", phonenumber: "", password: "" });
//     setShowAddModal(false);
//   };

//   const handleEditUser = (e) => {
//     e.preventDefault();
//     setUsers(users.map((u) => (u.id === selectedUser.id ? selectedUser : u)));
//     setSelectedUser(null);
//     setShowEditModal(false);
//   };

//   const handleDeleteUser = () => {
//     setUsers(users.filter((u) => u.id !== selectedUser.id));
//     setSelectedUser(null);
//     setShowDeleteModal(false);
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/* Search & Add Button */}
//       <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
//         <div className="flex gap-4">
//           <input
//             type="text"
//             placeholder="Search by ID, name, email, or phone..."
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setCurrentPage(1);
//             }}
//             className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//           />
//           <button
//             onClick={() => setShowAddModal(true)}
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 font-medium"
//           >
//             <UserPlus size={18} /> Add User
//           </button>
//         </div>
//       </div>

//       {/* Users Table */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//         <table className="min-w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="py-3 px-4 text-left font-semibold text-gray-700">ID</th>
//               <th className="py-3 px-4 text-left font-semibold text-gray-700">Full Name</th>
//               <th className="py-3 px-4 text-left font-semibold text-gray-700">Email</th>
//               <th className="py-3 px-4 text-left font-semibold text-gray-700">Phone</th>
//               <th className="py-3 px-4 text-center font-semibold text-gray-700">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentUsers.map((user) => (
//               <tr key={user.id} className="hover:bg-gray-50">
//                 <td className="py-3 px-4 border-b text-gray-600">{user.id}</td>
//                 <td className="py-3 px-4 border-b font-medium">{user.firstname} {user.lastname}</td>
//                 <td className="py-3 px-4 border-b text-gray-700">{user.email}</td>
//                 <td className="py-3 px-4 border-b text-gray-700">{user.phonenumber}</td>
//                 <td className="py-3 px-4 border-b text-center">
//                   <div className="flex justify-center gap-2">
//                     <button
//                       onClick={() => {
//                         setSelectedUser(user);
//                         setShowEditModal(true);
//                       }}
//                       className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200 flex items-center gap-1"
//                     >
//                       <Edit size={16} />
//                     </button>
//                     <button
//                       onClick={() => {
//                         setSelectedUser(user);
//                         setShowDeleteModal(true);
//                       }}
//                       className="bg-red-100 text-red-700 px-3 py-1 rounded text-sm hover:bg-red-200 flex items-center gap-1"
//                     >
//                       <Trash2 size={16} />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}

//             {currentUsers.length === 0 && (
//               <tr>
//                 <td colSpan="5" className="text-center py-6 text-gray-500">
//                   No users found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="flex justify-center items-center py-4 gap-2">
//             <button
//               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//               className="px-3 py-1 border rounded-lg bg-gray-100 hover:bg-gray-200"
//               disabled={currentPage === 1}
//             >
//               ←
//             </button>

//             {[...Array(totalPages)].map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentPage(index + 1)}
//                 className={`px-3 py-1 border rounded-lg ${
//                   currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             ))}

//             <button
//               onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//               className="px-3 py-1 border rounded-lg bg-gray-100 hover:bg-gray-200"
//               disabled={currentPage === totalPages}
//             >
//               →
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Modals */}
//       {showAddModal && (
//         <AddUserModal
//           newUser={newUser}
//           setNewUser={setNewUser}
//           handleAddUser={handleAddUser}
//           onClose={() => setShowAddModal(false)}
//         />
//       )}

//       {showEditModal && selectedUser && (
//         <EditUserModal
//           selectedUser={selectedUser}
//           setSelectedUser={setSelectedUser}
//           handleEditUser={handleEditUser}
//           onClose={() => setShowEditModal(false)}
//         />
//       )}

//       {showDeleteModal && selectedUser && (
//         <DeleteUserModal
//           selectedUser={selectedUser}
//           handleDeleteUser={handleDeleteUser}
//           onClose={() => setShowDeleteModal(false)}
//         />
//       )}
//     </div>
//   );
// }
import React, { useState } from 'react';
import UnreturnedRequestsTable from '../tables/UnreturnedRequestsTable';
import UnreturnedBooksTable from '../tables/UnreturnedBooksTable';
import Img from '../assets/image.png'
import { FaBook } from 'react-icons/fa'; // for Book
import { HiClipboardList } from 'react-icons/hi'; // for Requests

export default function Unreturned() {
  const [activeTab, setActiveTab] = useState('Requests');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // adjust rows per page

  // Sample data for Requests table
  const requestsData = [
    { id: 1, name: "Sok Dara", phone: "+855123456", staff: "Mr. Rith", expireDate: "2025-11-09", status: "Pending" },
    { id: 2, name: "Chan Sophea", phone: "+855987654", staff: "Ms. Lina", expireDate: "2025-11-10", status: "Pending" },
    { id: 3, name: "Keo Rith", phone: "+855555555", staff: "Mr. Sam", expireDate: "2025-11-11", status: "Pending" },
  ];

  // Sample data for Books table
const booksData = [
  { id: 101, title: "React Basics", author: "John Doe", physicalCopies: 3, digitalCopies: 5, image: Img },
  { id: 102, title: "JavaScript Guide", author: "Jane Smith", physicalCopies: 2, digitalCopies: 4, image: Img },
  { id: 103, title: "Vue Essentials", author: "Alex Kim", physicalCopies: 5, digitalCopies: 3, image: Img },
];


  // Filter based on search
  const filteredRequests = requestsData.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) || item.id.toString().includes(search)
  );

  const filteredBooks = booksData.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) || item.id.toString().includes(search)
  );

  // Pagination logic
  const getPaginatedData = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const totalPages = (data) => Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (page) => setCurrentPage(page);

  const renderPagination = (data) => {
    const pages = totalPages(data);
    if (pages <= 1) return null;

    return (
      <div className="flex justify-center mt-4 gap-2 items-center">
        {/* Previous button */}
        <button
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded-lg transition disabled:opacity-50"
        >
          &lt;
        </button>

        {/* Page numbers */}
        {Array.from({ length: pages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`px-3 py-1 rounded border transition ${
              page === currentPage
                ? 'bg-blue-500 text-white border-blue-500'
                : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next button */}
        <button
          onClick={() => currentPage < pages && setCurrentPage(currentPage + 1)}
          disabled={currentPage === pages}
          className="px-3 py-1 border rounded-lg transition disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Tabs */}
      <div className="flex gap-3 mb-4">
 <button
  onClick={() => { setActiveTab('Requests'); setCurrentPage(1); }}
  className={`px-4 py-2 border rounded-lg font-semibold transition flex items-center gap-2
    ${activeTab === 'Requests'
      ? 'bg-blue-500 text-white border-blue-500'
      : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white'
    }`}
>
  <HiClipboardList className="w-5 h-5" />
  Requests
</button>
 <button
  onClick={() => { setActiveTab('Book'); setCurrentPage(1); }}
  className={`px-4 py-2 border rounded-lg font-semibold transition flex items-center gap-2
    ${activeTab === 'Book'
      ? 'bg-blue-500 text-white border-blue-500'
      : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white'
    }`}
>
  <FaBook className="w-5 h-5" />
  Book
</button>
</div>


      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by ID or Name"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Conditional Table */}
      {activeTab === 'Requests' && (
        <>
          <UnreturnedRequestsTable data={getPaginatedData(filteredRequests)} />
          {renderPagination(filteredRequests)}
        </>
      )}
      {activeTab === 'Book' && (
        <>
          <UnreturnedBooksTable data={getPaginatedData(filteredBooks)} />
          {renderPagination(filteredBooks)}
        </>
      )}
    </div>
  );
}
