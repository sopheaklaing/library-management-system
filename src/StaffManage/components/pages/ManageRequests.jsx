// import React, { useState } from "react";
// import { UserPlus, Edit, Trash2 } from "lucide-react";
// import AddStaffModal from "../model/Staff/AddStaffModal";
// import EditStaffModal from "../model/Staff/EditStaffModal";
// import DeleteStaffModal from "../model/Staff/DeleteStaffModal";
// import { Trash ,Pencil,Eye } from "lucide-react";
// export default function ManageStaff() {
//   const [staffMembers, setStaffMembers] = useState([
//     { id: 1, firstName: "Soot", lastName: "Gerald", email: "soot.gerald@library.com", password: "password123", phone: "+85 123-456-67" },
//     { id: 2, firstName: "Tywin", lastName: "Lanister", email: "tywin.lanister@library.com", password: "password123", phone: "+85 123-456-68" },
//     { id: 3, firstName: "John", lastName: "Yellowenow", email: "john.yellow@library.com", password: "password123", phone: "+85 123-456-69" },
//     { id: 4, firstName: "Anna", lastName: "Smith", email: "anna.smith@library.com", password: "password123", phone: "+85 123-456-70" },
//     { id: 5, firstName: "David", lastName: "Brown", email: "david.brown@library.com", password: "password123", phone: "+85 123-456-71" },
//     { id: 6, firstName: "Clara", lastName: "Jones", email: "clara.jones@library.com", password: "password123", phone: "+85 123-456-72" },
//   ]);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedStaff, setSelectedStaff] = useState(null);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 3;

//   // Filter staff by search term
//   const filteredStaff = staffMembers.filter(
//     (staff) =>
//       staff.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       staff.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       staff.id.toString().includes(searchTerm)
//   );

//   // Pagination logic
//   const totalPages = Math.ceil(filteredStaff.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentStaff = filteredStaff.slice(startIndex, startIndex + itemsPerPage);

//   // ➕ Add Staff
//   const handleAddStaff = (newStaff) => {
//     const newId = staffMembers.length ? staffMembers[staffMembers.length - 1].id + 1 : 1;
//     setStaffMembers([...staffMembers, { ...newStaff, id: newId }]);
//     setShowAddModal(false);
//   };

//   // ✏️ Edit Staff
//   const handleEditStaff = (updatedStaff) => {
//     setStaffMembers(staffMembers.map((staff) => (staff.id === updatedStaff.id ? updatedStaff : staff)));
//     setSelectedStaff(null);
//     setShowEditModal(false);
//   };

//   // 🗑️ Delete Staff
//   const handleDeleteStaff = () => {
//     setStaffMembers(staffMembers.filter((staff) => staff.id !== selectedStaff.id));
//     setSelectedStaff(null);
//     setShowDeleteModal(false);
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/* Search & Add */}
//       <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
//         <div className="flex gap-4">
//           <input
//             type="text"
//             placeholder="Search by ID or Name..."
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setCurrentPage(1); // reset to first page on search
//             }}
//             className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             onClick={() => setShowAddModal(true)}
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
//           >
//             <UserPlus size={18} /> Add Staff
//           </button>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//         <table className="min-w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="py-3 px-4 text-left font-semibold text-gray-700">ID</th>
//               <th className="py-3 px-4 text-left font-semibold text-gray-700">First Name</th>
//               <th className="py-3 px-4 text-left font-semibold text-gray-700">Last Name</th>
//               <th className="py-3 px-4 text-left font-semibold text-gray-700">Email</th>
//               <th className="py-3 px-4 text-left font-semibold text-gray-700">Phone</th>
//               <th className="py-3 px-4 text-center font-semibold text-gray-700">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentStaff.map((staff) => (
//               <tr key={staff.id} className="hover:bg-gray-50">
//                 <td className="py-3 px-4 border-b">{staff.id}</td>
//                 <td className="py-3 px-4 border-b">{staff.firstName}</td>
//                 <td className="py-3 px-4 border-b">{staff.lastName}</td>
//                 <td className="py-3 px-4 border-b">{staff.email}</td>
//                 <td className="py-3 px-4 border-b">{staff.phone}</td>
//                 <td className="py-3 px-4 border-b text-center">
//                   <div className="flex justify-center gap-3">
//                     <button
//                       onClick={() => {
//                         setSelectedStaff(staff);
//                         setShowEditModal(true);
//                       }}
//                       className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200 flex items-center gap-1"
//                     >
//                       <Edit size={16} /> 
//                     </button>
//                     <button
//                       onClick={() => {
//                         setSelectedStaff(staff);
//                         setShowDeleteModal(true);
//                       }}
//                       className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 flex items-center gap-1"
//                     >
//                       <Trash2 size={16} /> 
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//             {currentStaff.length === 0 && (
//               <tr>
//                 <td colSpan="6" className="text-center py-6 text-gray-500">
//                   No staff members found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>

//         {/*  Pagination */}
//        {totalPages > 1 && (
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
//                   currentPage === index + 1
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-100 hover:bg-gray-200"
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
//         <AddStaffModal onClose={() => setShowAddModal(false)} onSave={handleAddStaff} />
//       )}

//       {showEditModal && selectedStaff && (
//         <EditStaffModal
//           staff={selectedStaff}
//           onClose={() => setShowEditModal(false)}
//           onSave={handleEditStaff}
//         />
//       )}

//       {showDeleteModal && selectedStaff && (
//         <DeleteStaffModal
//           staff={selectedStaff}
//           onClose={() => setShowDeleteModal(false)}
//           onDelete={handleDeleteStaff}
//         />
//       )}
//     </div>
//   );
// }
import React, { useState } from "react";
import { Clock, CheckCircle, Package } from "lucide-react";
import ApproveModal from "../model/Requests/ApproveModal";
import RejectModal from "../model/Requests/RejectModal";
import PendingTable from "../tables/PendingTable";
import ApprovedTable from "../tables/ApprovedTable";
import PickedUpTable from "../tables/PickedUpTable";

export default function ManageRequests() {
  const [activeTab, setActiveTab] = useState("Pending");
  const [search, setSearch] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  const tabs = [
    { name: "Pending", icon: <Clock size={16} /> },
    { name: "Approved", icon: <CheckCircle size={16} /> },
    { name: "Picked up", icon: <Package size={16} /> },
  ];

  const data = [
    { id: 1, name: "Scot Gerald", phone: "+855 123-456-67", amount: "1 book", date: "2025-11-08" },
    { id: 2, name: "Fritz Gerald", phone: "+855 123-456-67", amount: "2 books", date: "2025-11-08" },
  ];

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toString().includes(search)
  );

  const handleApproveClick = (request) => {
    setSelectedRequest(request);
    setShowApproveModal(true);
  };

  const handleRejectClick = (request) => {
    setSelectedRequest(request);
    setShowRejectModal(true);
  };

  const confirmApprove = () => {
    alert(`✅ Request ID ${selectedRequest.id} approved successfully!`);
    setShowApproveModal(false);
    setSelectedRequest(null);
  };

  const confirmReject = (reason) => {
    alert(`❌ Request ID ${selectedRequest.id} rejected.\nReason: ${reason}`);
    setShowRejectModal(false);
    setSelectedRequest(null);
  };
  const handlePickUp = (request) => {
  alert(`📦 Request ID ${request.id} marked as picked up!`);
};

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Tabs */}
      <div className="flex gap-3 mb-6">
        {tabs.map(({ name, icon }) => (
          <button
            key={name}
            onClick={() => setActiveTab(name)}
            className={`px-4 py-2 rounded-[10px] font-semibold flex items-center gap-2 border transition-colors duration-200 ${
              activeTab === name
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-gray-600 border-gray-300 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600"
            }`}
          >
            {icon}
            {name}
          </button>
        ))}
      </div>

      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by ID or Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Conditional Table Rendering */}
      {activeTab === "Pending" && (
        <PendingTable data={filteredData} onApprove={handleApproveClick} onReject={handleRejectClick} />
      )}
      {activeTab === "Approved" && <ApprovedTable data={filteredData} onPickUp={handlePickUp}/>}
      {activeTab === "Picked up" && <PickedUpTable data={filteredData} />}

      {/* Modals */}
      <ApproveModal
        show={showApproveModal}
        request={selectedRequest}
        onClose={() => setShowApproveModal(false)}
        onConfirm={confirmApprove}
      />

      <RejectModal
        show={showRejectModal}
        request={selectedRequest}
        onClose={() => setShowRejectModal(false)}
        onConfirm={confirmReject}
      />
    </div>
  );
}
