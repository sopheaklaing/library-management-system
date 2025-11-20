import React, { useState } from "react";
import { UserPlus, Edit, Trash2 } from "lucide-react";
import AddUserModal from "../model/User/AddUserModal";
import EditUserModal from "../model/User/EditUserModal";
import DeleteUserModal from "../model/User/DeleteUserModal";

export default function ManageUsers() {
  const [users, setUsers] = useState([
    { id: 1, firstname: "John", lastname: "Doe", email: "john@example.com", phonenumber: "0123456789", password: "1234" },
    { id: 2, firstname: "Jane", lastname: "Smith", email: "jane@example.com", phonenumber: "0987654321", password: "1234" },
    { id: 3, firstname: "Anna", lastname: "Brown", email: "anna@example.com", phonenumber: "0991122334", password: "1234" },
    { id: 4, firstname: "David", lastname: "Lee", email: "david@example.com", phonenumber: "0112233445", password: "1234" },
    { id: 5, firstname: "Michael", lastname: "Chan", email: "michael@example.com", phonenumber: "0173344556", password: "1234" },
    { id: 6, firstname: "Sophia", lastname: "Kim", email: "sophia@example.com", phonenumber: "0156677889", password: "1234" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: ""
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredUsers = users.filter(
    (user) =>
      user.id.toString().includes(searchTerm) ||
      user.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phonenumber.includes(searchTerm)
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  const handleAddUser = (e) => {
    e.preventDefault();
    const newId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
    setUsers([...users, { ...newUser, id: newId }]);
    setNewUser({ firstname: "", lastname: "", email: "", phonenumber: "", password: "" });
    setShowAddModal(false);
  };

  const handleEditUser = (e) => {
    e.preventDefault();
    setUsers(users.map((u) => (u.id === selectedUser.id ? selectedUser : u)));
    setSelectedUser(null);
    setShowEditModal(false);
  };

  const handleDeleteUser = () => {
    setUsers(users.filter((u) => u.id !== selectedUser.id));
    setSelectedUser(null);
    setShowDeleteModal(false);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Search & Add Button */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search by ID, name, email, or phone..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 font-medium"
          >
            <UserPlus size={18} /> Add User
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">ID</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Full Name</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Email</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Phone</th>
              <th className="py-3 px-4 text-center font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b text-gray-600">{user.id}</td>
                <td className="py-3 px-4 border-b font-medium">{user.firstname} {user.lastname}</td>
                <td className="py-3 px-4 border-b text-gray-700">{user.email}</td>
                <td className="py-3 px-4 border-b text-gray-700">{user.phonenumber}</td>
                <td className="py-3 px-4 border-b text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setShowEditModal(true);
                      }}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200 flex items-center gap-1"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setShowDeleteModal(true);
                      }}
                      className="bg-red-100 text-red-700 px-3 py-1 rounded text-sm hover:bg-red-200 flex items-center gap-1"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {currentUsers.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center py-4 gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-3 py-1 border rounded-lg bg-gray-100 hover:bg-gray-200"
              disabled={currentPage === 1}
            >
              ←
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 border rounded-lg ${
                  currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className="px-3 py-1 border rounded-lg bg-gray-100 hover:bg-gray-200"
              disabled={currentPage === totalPages}
            >
              →
            </button>
          </div>
        )}
      </div>

      {/* Modals */}
      {showAddModal && (
        <AddUserModal
          newUser={newUser}
          setNewUser={setNewUser}
          handleAddUser={handleAddUser}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {showEditModal && selectedUser && (
        <EditUserModal
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          handleEditUser={handleEditUser}
          onClose={() => setShowEditModal(false)}
        />
      )}

      {showDeleteModal && selectedUser && (
        <DeleteUserModal
          selectedUser={selectedUser}
          handleDeleteUser={handleDeleteUser}
          onClose={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
}
