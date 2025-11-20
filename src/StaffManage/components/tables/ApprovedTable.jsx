import React from "react";
import { Eye, PlayCircle } from "lucide-react"; // added PlayCircle for running icon

export default function ApprovedTable({ data, onPickUp }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Table */}
      <table className="w-full border-collapse text-left">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="py-3 px-4 text-gray-700 font-semibold">Request ID</th>
            <th className="py-3 px-4 text-gray-700 font-semibold">User Name</th>
            <th className="py-3 px-4 text-gray-700 font-semibold">Phone</th>
            <th className="py-3 px-4 text-gray-700 font-semibold">By Staff</th>
            <th className="py-3 px-4 text-gray-700 font-semibold">Expire Date</th>
            <th className="py-3 px-4 text-gray-700 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4">{item.id}</td>
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.phone}</td>
                <td className="py-3 px-4">{item.staff || "N/A"}</td>
                <td className="py-3 px-4">{item.expireDate || "2025-12-01"}</td>
                <td className="py-3 px-4 text-center flex justify-center gap-2">
                  <Eye className="text-gray-600 cursor-pointer hover:text-black" />
                  <button
                    onClick={() => onPickUp(item)}
                    className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded-lg transition-transform hover:scale-105"
                  >
                    Pick Up
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-6 text-gray-500 italic">
                No approved requests
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Running Icon Section */}
      <div className="flex justify-center items-center py-4 gap-2 text-gray-500">
        <PlayCircle className="animate-spin text-blue-500" size={24} />
        <span className="italic text-sm">Running approval process...</span>
      </div>
    </div>
  );
}
