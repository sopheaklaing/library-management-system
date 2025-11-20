import React from 'react';
import { Eye } from 'lucide-react';

export default function UnreturnedBooksTable({ data }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="w-full border-collapse text-left">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="py-3 px-4 font-semibold">Book ID</th>
            <th className="py-3 px-4 font-semibold">Book Title</th>
            <th className="py-3 px-4 font-semibold">Author</th>
            <th className="py-3 px-4 font-semibold">Physical Copies</th>
            <th className="py-3 px-4 font-semibold">Digital Copies Available</th>
            <th className="py-3 px-4 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map(item => (
              <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                <td className="py-3 px-4">{item.id}</td>
                <td className="py-3 px-4 flex items-center gap-2">
  <img src={item.image} alt={item.title} className="w-12 h-16 object-cover rounded" />
  {item.title}
</td>

                <td className="py-3 px-4">{item.author}</td>
                <td className="py-3 px-4">{item.physicalCopies}</td>
                <td className="py-3 px-4">{item.digitalCopies}</td>
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
                No unreturned books
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
