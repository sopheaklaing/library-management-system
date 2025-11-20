import React from "react";

export default function DeleteStaffModal({ staff, onClose, onDelete }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Delete Staff</h2>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete <strong>{staff.firstName} {staff.lastName}</strong>?
        </p>
        <div className="flex justify-center gap-3">
          <button onClick={onClose} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            Cancel
          </button>
          <button onClick={onDelete} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
