import React from "react";
import { Eye, ThumbsUp, ThumbsDown } from "lucide-react";

export default function PendingTable({ data, onApprove, onReject }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="w-full border-collapse text-left">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="py-3 px-4 text-gray-700 font-semibold">Request ID</th>
            <th className="py-3 px-4 text-gray-700 font-semibold">User Name</th>
            <th className="py-3 px-4 text-gray-700 font-semibold">Phone</th>
            <th className="py-3 px-4 text-gray-700 font-semibold">Amount</th>
            <th className="py-3 px-4 text-gray-700 font-semibold">Date</th>
            <th className="py-3 px-4 text-gray-700 font-semibold text-center">Approve / Reject</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4">{item.id}</td>
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.phone}</td>
                <td className="py-3 px-4">{item.amount}</td>
                <td className="py-3 px-4">{item.date}</td>
                <td className="py-3 px-4 flex items-center justify-center gap-3">
                  <Eye className="text-gray-600 cursor-pointer hover:text-black" />
                  <ThumbsUp
                    className="text-green-500 cursor-pointer hover:scale-110"
                    onClick={() => onApprove(item)}
                  />
                  <ThumbsDown
                    className="text-red-500 cursor-pointer hover:scale-110"
                    onClick={() => onReject(item)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-6 text-gray-500 italic">
                No pending requests
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
