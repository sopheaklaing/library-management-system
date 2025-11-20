import React, { useState } from "react";
import { Plus, Upload, FileImage, FileText } from "lucide-react";

export default function EditBookModal({ book, onSave, onClose, categories }) {
  const [editingBook, setEditingBook] = useState(book);

  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => setEditingBook({ ...editingBook, image: reader.result });
    reader.readAsDataURL(file);
  };

  const handlePDFUpload = (file) => {
    setEditingBook({ ...editingBook, pdf: file });
  };

  const handleDrop = (e, type) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;
    if (type === "image" && file.type.startsWith("image/")) handleImageUpload(file);
    else if (type === "pdf" && file.type === "application/pdf") handlePDFUpload(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editingBook);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-5xl w-full p-6 overflow-y-auto max-h-[90vh]">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Edit Book</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, "image")}
            onClick={() => document.getElementById("imageInput").click()}
            className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors cursor-pointer"
          >
            {editingBook.image ? (
              <div className="flex flex-col items-center">
                <img
                  src={editingBook.image}
                  alt="Book Cover"
                  className="w-32 h-32 object-cover rounded-lg mb-2"
                />
                <p className="text-sm text-gray-600">Book cover uploaded</p>
              </div>
            ) : (
              <div className="flex flex-col items-center text-gray-500">
                <FileImage className="w-8 h-8 mb-2" />
                <p>Drag & drop book cover image, or click to upload</p>
              </div>
            )}
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e.target.files[0])}
              className="hidden"
            />
          </div>

          {/* PDF Upload */}
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, "pdf")}
            onClick={() => document.getElementById("pdfInput").click()}
            className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors cursor-pointer"
          >
            {editingBook.pdf ? (
              <div className="flex flex-col items-center text-green-600">
                <FileText className="w-8 h-8 mb-2" />
                <p>{editingBook.pdf.name}</p>
              </div>
            ) : (
              <div className="flex flex-col items-center text-gray-500">
                <Upload className="w-8 h-8 mb-2" />
                <p>Drag & drop PDF file, or click to upload</p>
              </div>
            )}
            <input
              id="pdfInput"
              type="file"
              accept="application/pdf"
              onChange={(e) => handlePDFUpload(e.target.files[0])}
              className="hidden"
            />
          </div>

          {/* Input Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Title", key: "title", type: "text" },
              { label: "Author", key: "author", type: "text" },
              { label: "ISBN", key: "isbn", type: "text" }, // Added
              { label: "Publisher", key: "publisher", type: "text" },
              { label: "Language", key: "language", type: "text" },
              { label: "Published Year", key: "publishedYear", type: "number" },
              { label: "Pages", key: "pages", type: "number" },
              { label: "Physical Copies", key: "physicalCopies", type: "number" },
              { label: "Digital Copies", key: "digitalCopies", type: "number" },
            ].map(({ label, key, type }) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{label} *</label>
                <input
                  type={type}
                  required
                  value={editingBook[key]}
                  onChange={(e) =>
                    setEditingBook({
                      ...editingBook,
                      [key]: type === "number" ? parseInt(e.target.value) || 0 : e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
              <select
                value={editingBook.category}
                onChange={(e) => setEditingBook({ ...editingBook, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status *</label>
              <select
                value={editingBook.status}
                onChange={(e) => setEditingBook({ ...editingBook, status: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option>Available</option>
                <option>Borrowed</option>
                <option>Maintenance</option>
                <option>Lost</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={editingBook.description}
              onChange={(e) => setEditingBook({ ...editingBook, description: e.target.value })}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Write a short summary or overview..."
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
