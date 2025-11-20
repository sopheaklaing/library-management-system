// utils/books.js

export const getStatusColor = (status) => {
  switch (status) {
    case "Available":
      return "bg-green-100 text-green-800";
    case "Borrowed":
      return "bg-yellow-100 text-yellow-800";
    case "Maintenance":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const filterBooks = (books, searchTerm, selectedCategory) => {
  return books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.isbn.includes(searchTerm);
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
};
