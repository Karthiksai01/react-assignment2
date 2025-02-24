import React from "react";
import { useParams, Link } from "react-router-dom";
import dummyBooks from "./dummyBooks"; // Import dummy data
import "./book-details.css"

const BookDetails = () => {
  const { id } = useParams();
  const book = dummyBooks.find((b) => b.id === id)?.volumeInfo;

  if (!book) return <p>Book not found.</p>;

  return (
    <div className="bookDetails">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.authors?.join(", ")}</p>
      <p><strong>Category:</strong> {book.categories?.join(", ")}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <Link to="/books">Back to Browse</Link>
    </div>
  );
};

export default BookDetails;
