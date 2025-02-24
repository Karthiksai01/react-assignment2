import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/bookSlice";
import "./AddBook.css";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    authors: "",
    category: "",
    description: "",
    image: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.title) errors.title = "Title is required";
    if (!formData.authors) errors.authors = "Author is required";
    if (!formData.category) errors.category = "Category is required";
    if (!formData.description) errors.description = "Description is required";
    if (!formData.image) errors.image = "Image URL is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newBook = {
      id: Date.now().toString(),
      volumeInfo: {
        title: formData.title,
        authors: formData.authors.split(","),
        categories: [formData.category],
        description: formData.description,
        imageLinks: { thumbnail: formData.image },
      },
    };

    dispatch(addBook(newBook));
    navigate("/books");
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
        {errors.title && <p className="error">{errors.title}</p>}

        <label>Authors (comma separated):</label>
        <input type="text" name="authors" value={formData.authors} onChange={handleChange} />
        {errors.authors && <p className="error">{errors.authors}</p>}

        <label>Category:</label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} />
        {errors.category && <p className="error">{errors.category}</p>}

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} />
        {errors.description && <p className="error">{errors.description}</p>}

        <label>Image URL:</label>
        <input type="text" name="image" value={formData.image} onChange={handleChange} />
        {errors.image && <p className="error">{errors.image}</p>}

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
