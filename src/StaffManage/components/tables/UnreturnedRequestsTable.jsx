import React from 'react';
import { Eye, CornerUpLeft } from 'lucide-react';

export default function UnreturnedRequestsTable({ data }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="w-full border-collapse text-left">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="py-3 px-4 font-semibold">Request ID</th>
            <th className="py-3 px-4 font-semibold">User Name</th>
            <th className="py-3 px-4 font-semibold">Phone</th>
            <th className="py-3 px-4 font-semibold">Staff</th>
            <th className="py-3 px-4 font-semibold">Expire Date</th>
            <th className="py-3 px-4 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map(item => (
              <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                <td className="py-3 px-4">{item.id}</td>
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.phone}</td>
                <td className="py-3 px-4">{item.staff}</td>
                <td className="py-3 px-4">{item.expireDate}</td>
                <td className="py-3 px-4 text-center flex justify-center items-center gap-2">
                  {/* Eye icon */}
                  <button className="text-blue-500 hover:text-blue-700 transition">
                    <Eye size={20} />
                  </button>
                  {/* Return button */}
                  <button className="flex items-center gap-1 px-2 py-1 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition">
                    <CornerUpLeft size={16} /> Return
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-6 text-gray-500 italic">
                No unreturned requests
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
