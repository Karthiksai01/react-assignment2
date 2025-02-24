import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import dummyBooks from "./dummyBooks"; // Import dummy books
import "./Browse.css";

const categories = ["All", "Fiction", "Sci-Fi", "Fantasy", "Mystery", "Programming", "Horror"];

const BrowseBooks = () => {
  const addedBooks = useSelector((state) => state.books); // Get added books from Redux store
  const allBooks = [...dummyBooks, ...addedBooks]; // Combine dummy books and added books

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter books based on category and search query
  const filteredBooks = allBooks.filter((book) => {
    const matchesCategory =
      selectedCategory === "All" || book.volumeInfo.categories.includes(selectedCategory);
    const matchesSearch = book.volumeInfo.title.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search books..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Book List */}
      <h2>Browse Books</h2>
      <div className="books-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img
                src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
                alt={book.volumeInfo.title}
              />
              <h3>{book.volumeInfo.title}</h3>
              <p>Author: {book.volumeInfo.authors?.join(", ") || "Unknown"}</p>
              <Link to={`/books/${book.id}`}>View Details</Link>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
