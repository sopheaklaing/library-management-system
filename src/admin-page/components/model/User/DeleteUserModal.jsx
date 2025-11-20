import React from 'react';

export default function DeleteUserModal({ selectedUser, handleDeleteUser, onClose }) {
  if (!selectedUser) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md text-center p-6">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
          <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Delete User</h3>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete <strong className="text-red-600">{selectedUser.username}</strong>?
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleDeleteUser}
            className="flex-1 bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-500 text-white py-3 rounded-xl hover:bg-gray-600 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
