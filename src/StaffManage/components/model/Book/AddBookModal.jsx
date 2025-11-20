import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Plus, Upload, FileImage, FileText } from "lucide-react";

export default function AddBookModal({ onClose, onSave, categories }) {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    isbn: "",
    publisher: "",
    language: "",
    category: categories[0] || "",
    physicalCopies: "",
    digitalCopies: "",
    description: "",
    image: null,
    pdf: null,
  });

  // Image upload
  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => setNewBook({ ...newBook, image: reader.result });
    reader.readAsDataURL(file);
  };

  // PDF upload
  const handlePDFUpload = (file) => {
    setNewBook({ ...newBook, pdf: file });
  };

  // Drag & Drop
  const handleDrop = (e, type) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;
    if (type === "image" && file.type.startsWith("image/")) handleImageUpload(file);
    else if (type === "pdf" && file.type === "application/pdf") handlePDFUpload(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBook.title && newBook.author) onSave(newBook);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-blue-700 flex items-center gap-2">
            New Book Information <Plus className="w-5 h-5" />
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Uploads */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Image Upload */}
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, "image")}
                onClick={() => document.getElementById("imageInput").click()}
                className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors cursor-pointer"
              >
                {newBook.image ? (
                  <div className="flex flex-col items-center">
                    <img
                      src={newBook.image}
                      alt="Book Cover"
                      className="w-32 h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm text-gray-600">Book cover uploaded</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-gray-500">
                    <FileImage className="w-8 h-8 mb-2" />
                    <p>Drag & drop book cover, or click to upload</p>
                  </div>
                )}
                <Input
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
                {newBook.pdf ? (
                  <div className="flex flex-col items-center text-green-600">
                    <FileText className="w-8 h-8 mb-2" />
                    <p>{newBook.pdf.name}</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-gray-500">
                    <Upload className="w-8 h-8 mb-2" />
                    <p>Drag & drop PDF file, or click to upload</p>
                  </div>
                )}
                <Input
                  id="pdfInput"
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => handlePDFUpload(e.target.files[0])}
                  className="hidden"
                />
              </div>
            </div>

            {/* Input fields in 4-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <Label>Book Title</Label>
                <Input
                  value={newBook.title}
                  onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                />
              </div>
              <div>
                <Label>Author</Label>
                <Input
                  value={newBook.author}
                  onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                />
              </div>
              <div>
                <Label>ISBN</Label>
                <Input
                  value={newBook.isbn}
                  onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
                />
              </div>
              <div>
                <Label>Publisher</Label>
                <Input
                  value={newBook.publisher}
                  onChange={(e) => setNewBook({ ...newBook, publisher: e.target.value })}
                />
              </div>
              <div>
                <Label>Language</Label>
                <Input
                  value={newBook.language}
                  onChange={(e) => setNewBook({ ...newBook, language: e.target.value })}
                />
              </div>

              <div>
                <Label>Physical Copies</Label>
                <Input
                  type="number"
                  min="0"
                  value={newBook.physicalCopies}
                  onChange={(e) =>
                    setNewBook({ ...newBook, physicalCopies: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Digital Copies</Label>
                <Input
                  type="number"
                  min="0"
                  value={newBook.digitalCopies}
                  onChange={(e) => setNewBook({ ...newBook, digitalCopies: e.target.value })}
                />
              </div>

              <div className="col-span-2">
                <Label>Category</Label>
                <div className="flex gap-2 items-center">
                  <select
                    value={newBook.category}
                    onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
                    className="flex-1 border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map((c, i) => (
                      <option key={i}>{c}</option>
                    ))}
                  </select>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="text-green-600 border-green-600 hover:bg-green-50"
                  >
                    <Plus size={16} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <Label>Description</Label>
              <Textarea
                rows="4"
                value={newBook.description}
                onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
                placeholder="Write a short summary or overview..."
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="border-red-500 text-red-500 hover:bg-red-50"
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Add Book
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
