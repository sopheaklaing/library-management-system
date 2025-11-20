import React, { useState } from "react";
import { X } from "lucide-react";

export default function RejectModal({ show, request, onClose, onConfirm }) {
  const [reason, setReason] = useState("");

  if (!show || !request) return null;

  // Example: each request has an array of books
  const books = request.books || [
    { id: "B001", name: "Introduction to AI", language: "English" },
    { id: "B002", name: "Web Development Basics", language: "Khmer" },
  ];

  const totalBooks = books.length;
  const madeDate = request.madeDate || new Date().toLocaleDateString();

  const handleConfirm = () => {
    if (!reason.trim()) {
      alert("Please provide a reason for rejection.");
      return;
    }
    onConfirm(reason);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-red-500">Reject Request</h2>
          <X
            className="cursor-pointer text-gray-500 hover:text-red-500"
            onClick={onClose}
          />
        </div>

        {/* Request Info */}
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-gray-700">
              <span className="font-semibold">Request ID:</span> {request.id}
            </p>
          </div>
          <div>
            <p className="text-gray-700">
              <span className="font-semibold">Made date:</span> {madeDate}
            </p>
          </div>
        </div>

        {/* Books Table */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3 text-sm font-medium text-gray-600">Book ID</th>
                <th className="text-left py-2 px-3 text-sm font-medium text-gray-600">Name</th>
                <th className="text-left py-2 px-3 text-sm font-medium text-gray-600">Language</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={index} className="border-b border-gray-100 last:border-b-0">
                  <td className="py-3 px-3 text-sm">{book.id}</td>
                  <td className="py-3 px-3 text-sm">{book.name}</td>
                  <td className="py-3 px-3 text-sm">{book.language}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Reason Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Reason for Rejection:
          </label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Please explain why this request is being rejected..."
            className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-red-400 focus:outline-none resize-none"
            rows={4}
          />
        </div>

        {/* Total & Buttons */}
        <div className="flex items-center justify-between">
          <div className="bg-white rounded-lg border border-gray-200 px-4 py-2">
            <p className="text-gray-800 font-medium">
              Total Books: <span className="text-blue-600">{totalBooks.toString().padStart(2, '0')} Books</span>
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Back
            </button>
            <button
              onClick={handleConfirm}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}