// import React, { useState } from "react";
// import AddBookModal from "../model/Book/AddBookModal";
// import EditBookModal from "../model/Book/EditBookModal";

// export default function ManageBooks() {
//   const [books, setBooks] = useState([
//     { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "978-0-7432-7356-5", category: "Fiction", status: "Available", publishedYear: 1925, copies: 3 },
//     { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "978-0-06-112008-4", category: "Fiction", status: "Borrowed", publishedYear: 1960, copies: 2 },
//     { id: 3, title: "1984", author: "George Orwell", isbn: "978-0-452-28423-4", category: "Science Fiction", status: "Available", publishedYear: 1949, copies: 5 },
//     { id: 4, title: "Pride and Prejudice", author: "Jane Austen", isbn: "978-0-14-143951-8", category: "Romance", status: "Available", publishedYear: 1813, copies: 4 },
//     { id: 5, title: "The Hobbit", author: "J.R.R. Tolkien", isbn: "978-0-547-92822-7", category: "Fantasy", status: "Maintenance", publishedYear: 1937, copies: 2 },
//   ]);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [editingBook, setEditingBook] = useState(null);
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);

//   const categories = ["All", "Fiction", "Science Fiction", "Romance", "Fantasy", "Mystery", "Biography", "History"];

//   const filteredBooks = books.filter((book) => {
//     const matchesSearch =
//       book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.isbn.includes(searchTerm);
//     const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const handleAddBook = (newBook) => {
//     const newId = books.length ? Math.max(...books.map((b) => b.id)) + 1 : 1;
//     setBooks([...books, { ...newBook, id: newId }]);
//     setIsAddModalOpen(false);
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this book?")) {
//       setBooks(books.filter((book) => book.id !== id));
//     }
//   };

//   const handleEditSave = (updatedBook) => {
//     setBooks(books.map((b) => (b.id === updatedBook.id ? updatedBook : b)));
//     setEditingBook(null);
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Available":
//         return "bg-green-100 text-green-800";
//       case "Borrowed":
//         return "bg-yellow-100 text-yellow-800";
//       case "Maintenance":
//         return "bg-red-100 text-red-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-800">Manage Books</h1>
//           <p className="text-gray-600">Manage your library collection</p>
//         </div>
//         <div className="text-sm text-gray-500 text-right">
//           12:29 PM<br />Nov 05, 2025
//         </div>
//       </div>

//       {/* Search and Filters */}
//       <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
//         <div className="flex flex-col lg:flex-row gap-4">
//           <div className="flex-1 flex gap-4">
//             <input
//               type="text"
//               placeholder="Search by title, author, or ISBN..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//             <select
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//               className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//             >
//               {categories.map((category) => (
//                 <option key={category} value={category}>{category}</option>
//               ))}
//             </select>
//           </div>
//           <button
//             onClick={() => setIsAddModalOpen(true)}
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium"
//           >
//             Add Book
//           </button>
//         </div>
//       </div>

//       {/* Books Table */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//         <table className="min-w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               {["ID", "Title", "Author", "ISBN", "Category", "Year", "Copies", "Status", "Actions"].map((head) => (
//                 <th key={head} className="py-3 px-4 text-left font-semibold text-gray-700 border-b">{head}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {filteredBooks.map((book) => (
//               <tr key={book.id} className="hover:bg-gray-50">
//                 <td className="py-3 px-4 border-b">{book.id}</td>
//                 <td className="py-3 px-4 border-b font-medium">{book.title}</td>
//                 <td className="py-3 px-4 border-b">{book.author}</td>
//                 <td className="py-3 px-4 border-b font-mono">{book.isbn}</td>
//                 <td className="py-3 px-4 border-b">
//                   <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{book.category}</span>
//                 </td>
//                 <td className="py-3 px-4 border-b">{book.publishedYear}</td>
//                 <td className="py-3 px-4 border-b">{book.copies}</td>
//                 <td className="py-3 px-4 border-b">
//                   <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(book.status)}`}>{book.status}</span>
//                 </td>
//                 <td className="py-3 px-4 border-b">
//                   <div className="flex space-x-2">
//                     <button
//                       onClick={() => setEditingBook(book)}
//                       className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-200"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(book.id)}
//                       className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm hover:bg-red-200"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}

//             {filteredBooks.length === 0 && (
//               <tr>
//                 <td colSpan="9" className="text-center py-8 text-gray-500">
//                   No books found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modals */}
//       {isAddModalOpen && (
//         <AddBookModal
//           onClose={() => setIsAddModalOpen(false)}
//           onSave={handleAddBook}
//           categories={categories.filter((c) => c !== "All")}
//         />
//       )}

//       {editingBook && (
//         <EditBookModal
//           book={editingBook}
//           onSave={handleEditSave}
//           onClose={() => setEditingBook(null)}
//           categories={categories.filter((c) => c !== "All")}
//         />
//       )}
//     </div>
//   );
// }
// ManageBooks.jsx
import React, { useState } from "react";
import AddBookModal from "../model/Book/AddBookModal";
import EditBookModal from "../model/Book/EditBookModal";
import BookDetailsModal from "../model/Book/BookDetailsModal";
import { getStatusColor, filterBooks } from "../utils/Books";
import { Trash2, Edit, Eye, ChevronLeft, ChevronRight } from "lucide-react";

export default function ManageBooks() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isbn: "978-0-7432-7356-5",
      category: "Fiction",
      publisher: "Scribner",
      language: "English",
      description: "A novel set in the Roaring Twenties.",
      publishedYear: 1925,
      physicalCopies: 3,
      digitalCopies: 1,
      status: "Available",
      image: null,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      isbn: "978-0-452-28423-4",
      category: "Science Fiction",
      publisher: "Secker & Warburg",
      language: "English",
      description: "Dystopian novel on totalitarianism.",
      publishedYear: 1949,
      physicalCopies: 5,
      digitalCopies: 2,
      status: "Available",
      image: null,
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isbn: "978-0-06-112008-4",
      category: "Fiction",
      publisher: "J.B. Lippincott & Co.",
      language: "English",
      description: "A novel about racial inequality and moral growth.",
      publishedYear: 1960,
      physicalCopies: 2,
      digitalCopies: 1,
      status: "Borrowed",
      image: null,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      isbn: "978-0-14-143951-8",
      category: "Romance",
      publisher: "T. Egerton",
      language: "English",
      description: "A romantic novel of manners.",
      publishedYear: 1813,
      physicalCopies: 4,
      digitalCopies: 2,
      status: "Available",
      image: null,
    },
    {
      id: 5,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      isbn: "978-0-547-92822-7",
      category: "Fantasy",
      publisher: "George Allen & Unwin",
      language: "English",
      description: "Fantasy novel and children's book.",
      publishedYear: 1937,
      physicalCopies: 2,
      digitalCopies: 1,
      status: "Maintenance",
      image: null,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [editingBook, setEditingBook] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [detailsBook, setDetailsBook] = useState(null);

  const categories = [
    "All",
    "Fiction",
    "Science Fiction",
    "Romance",
    "Fantasy",
    "Mystery",
    "Biography",
    "History",
  ];

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredBooks = filterBooks(books, searchTerm, selectedCategory);

  // Get paginated books
  const paginatedBooks = filteredBooks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      // Calculate start and end of visible pages
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if we're at the beginning
      if (currentPage <= 3) {
        end = 4;
      }
      // Adjust if we're at the end
      else if (currentPage >= totalPages - 2) {
        start = totalPages - 3;
      }
      
      // Add ellipsis after first page if needed
      if (start > 2) {
        pages.push('...');
      }
      
      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      // Add ellipsis before last page if needed
      if (end < totalPages - 1) {
        pages.push('...');
      }
      
      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  // Add new book
  const handleAddBook = (newBook) => {
    const newId = books.length ? Math.max(...books.map((b) => b.id)) + 1 : 1;
    setBooks([...books, { ...newBook, id: newId }]);
    setIsAddModalOpen(false);
  };

  // Delete book
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      setBooks(books.filter((book) => book.id !== id));
      // Reset to first page if current page becomes empty
      if (paginatedBooks.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  // Save edited book
  const handleEditSave = (updatedBook) => {
    setBooks(books.map((b) => (b.id === updatedBook.id ? updatedBook : b)));
    setEditingBook(null);
  };

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      

      {/* Search & Filter */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 flex gap-4">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset to first page when searching
              }}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1); // Reset to first page when filtering
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors duration-200"
          >
            + Add Book
          </button>
        </div>
      </div>

      {/* Books Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              {[
                "Image",
                "Title",
                "Author",
                "ISBN",
                "Category",
                "Publisher",
                "Language",
                "Year",
                "Copies",
                "Status",
                "Actions",
              ].map((head) => (
                <th
                  key={head}
                  className="py-3 px-4 text-left font-semibold text-gray-700 border-b"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedBooks.map((book) => (
              <tr key={book.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="py-3 px-4 border-b">
                  {book.image ? (
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                  ) : (
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-400 text-xs rounded-md border">
                      No Image
                    </div>
                  )}
                </td>
                <td className="py-3 px-4 border-b font-medium text-gray-900">{book.title}</td>
                <td className="py-3 px-4 border-b text-gray-700">{book.author}</td>
                <td className="py-3 px-4 border-b font-mono text-sm text-gray-600">{book.isbn}</td>
                <td className="py-3 px-4 border-b">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                    {book.category}
                  </span>
                </td>
                <td className="py-3 px-4 border-b text-gray-700">{book.publisher}</td>
                <td className="py-3 px-4 border-b text-gray-700">{book.language}</td>
                <td className="py-3 px-4 border-b text-center text-gray-700">{book.publishedYear}</td>
                <td className="py-3 px-4 border-b text-center text-gray-700">
                  <div className="flex flex-col text-xs">
                    <span>Physical: {book.physicalCopies || 0}</span>
                    <span>Digital: {book.digitalCopies || 0}</span>
                    <span className="font-medium text-gray-900">
                      Total: {(book.physicalCopies || 0) + (book.digitalCopies || 0)}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4 border-b">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                      book.status
                    )}`}
                  >
                    {book.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="py-3 px-4 border-b">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setDetailsBook(book)}
                      className="bg-green-100 text-green-600 p-2 rounded-lg hover:bg-green-200 transition-colors duration-200"
                      title="View Details"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={() => setEditingBook(book)}
                      className="bg-blue-100 text-blue-600 p-2 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                      title="Edit Book"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 transition-colors duration-200"
                      title="Delete Book"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredBooks.length === 0 && (
              <tr>
                <td colSpan="12" className="text-center py-12 text-gray-500">
                  <div className="flex flex-col items-center">
                    <div className="text-6xl mb-4">📚</div>
                    <p className="text-lg font-medium text-gray-700 mb-2">No books found</p>
                    <p className="text-gray-500">
                      {searchTerm || selectedCategory !== "All" 
                        ? "Try adjusting your search or filter criteria" 
                        : "Get started by adding your first book"}
                    </p>
                    {(searchTerm || selectedCategory !== "All") && (
                      <button
                        onClick={() => {
                          setSearchTerm("");
                          setSelectedCategory("All");
                        }}
                        className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Clear filters
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Enhanced Pagination */}
        {filteredBooks.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-white border-t border-gray-200 gap-4">
            {/* Results count */}
            <div className="text-sm text-gray-600">
              Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{" "}
              <span className="font-medium">
                {Math.min(currentPage * itemsPerPage, filteredBooks.length)}
              </span>{" "}
              of <span className="font-medium">{filteredBooks.length}</span> results
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-1">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center gap-1 px-3 py-2 border rounded-lg text-sm font-medium transition-colors duration-200 ${
                  currentPage === 1
                    ? "bg-gray-50 text-gray-400 cursor-not-allowed border-gray-200"
                    : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300 hover:border-gray-400"
                }`}
              >
                <ChevronLeft size={16} />
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1 mx-2">
                {getPageNumbers().map((page, index) =>
                  page === '...' ? (
                    <span
                      key={`ellipsis-${index}`}
                      className="px-3 py-2 text-gray-500"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-2 border rounded-lg text-sm font-medium min-w-[40px] transition-colors duration-200 ${
                        currentPage === page
                          ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-1 px-3 py-2 border rounded-lg text-sm font-medium transition-colors duration-200 ${
                  currentPage === totalPages
                    ? "bg-gray-50 text-gray-400 cursor-not-allowed border-gray-200"
                    : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300 hover:border-gray-400"
                }`}
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {isAddModalOpen && (
        <AddBookModal
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleAddBook}
          categories={categories.filter((c) => c !== "All")}
        />
      )}

      {editingBook && (
        <EditBookModal
          book={editingBook}
          onSave={handleEditSave}
          onClose={() => setEditingBook(null)}
          categories={categories.filter((c) => c !== "All")}
        />
      )}

      {detailsBook && (
        <BookDetailsModal
          book={detailsBook}
          onClose={() => setDetailsBook(null)}
        />
      )}
    </div>
  );
}