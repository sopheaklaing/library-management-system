import React from "react";
import { Eye } from "lucide-react"; // 👁️ import the eye icon

export default function PickedUpTable({ data }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="w-full border-collapse text-left">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="py-3 px-4 text-gray-700 font-semibold">Request ID</th>
            <th className="py-3 px-4 text-gray-700 font-semibold">User Name</th>
            <th className="py-3 px-4 text-gray-700 font-semibold">Phone</th>
            <th className="py-3 px-4 text-gray-700 font-semibold">Staff</th>
            <th className="py-3 px-4 text-gray-700 font-semibold">Pickup Date & Time</th>
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
                <td className="py-3 px-4">{item.staff}</td>
                <td className="py-3 px-4">
                  {item.date} <span className="text-gray-400 text-sm">({item.time})</span>
                </td>
                <td className="py-3 px-4 text-center">
                  <button className="text-blue-500 hover:text-blue-700 transition">
                    <Eye size={20} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-6 text-gray-500 italic">
                No picked-up requests
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
