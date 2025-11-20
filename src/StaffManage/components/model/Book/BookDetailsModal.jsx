import React from "react";

export default function BookDetailsModal({ book, onClose }) {
  if (!book) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800";
      case "Borrowed":
        return "bg-yellow-100 text-yellow-800";
      case "Lost":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-5xl overflow-hidden transform transition-all duration-200 scale-100">
        {/* Header */}
        <div className="flex justify-between items-start p-6 border-b border-gray-200">
          <div className="flex items-start gap-5">
            {book.image ? (
              <img
                src={book.image}
                alt={`${book.title} cover`}
                className="w-28 h-36 object-cover rounded-lg shadow-sm ring-1 ring-gray-200"
              />
            ) : (
              <div className="w-28 h-36 flex items-center justify-center bg-gray-100 text-gray-400 text-xs rounded-lg ring-1 ring-gray-200">
                No Image
              </div>
            )}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                {book.title}
              </h2>
              <p className="text-gray-600 mt-1 text-sm">by {book.author}</p>
              <p className="text-gray-500 text-sm mt-1 font-mono">
                ISBN: {book.isbn || "—"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-200 text-gray-600"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500 mb-2">Publisher</p>
            <p className="text-gray-700">{book.publisher}</p>
            <p className="text-sm text-gray-500 mt-3 mb-2">Language</p>
            <p className="text-gray-700">{book.language}</p>
            <p className="text-sm text-gray-500 mt-3 mb-2">Category</p>
            <p className="text-gray-700">{book.category}</p>
            <p className="text-sm text-gray-500 mt-3 mb-2">Pages</p>
            <p className="text-gray-700">{book.pages}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">Copies</p>
            <p className="text-gray-700">
              Physical: {book.physicalCopies} | Digital: {book.digitalCopies}
            </p>
            <p className="text-sm text-gray-500 mt-3 mb-2">Status</p>
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                book.status
              )}`}
            >
              {book.status}
            </span>
            <p className="text-sm text-gray-500 mt-3 mb-2">Description</p>
            <p className="text-gray-700 whitespace-pre-wrap">{book.description}</p>
          </div>
        </div>

        {/* PDF download */}
        {book.pdf && (
          <div className="p-6 border-t border-gray-200 flex items-center gap-3">
            <a
              href={URL.createObjectURL(book.pdf)}
              download={book.pdf.name}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Download PDF
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
