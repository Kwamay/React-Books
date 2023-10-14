import React, { useState } from 'react';
import '../CSS/form.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const CreateBook = () => {
  // Define state variables for the book title and author
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  // Handle input changes and update the state variables
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // Handle form submission (you can add your logic here)
  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="form-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="author"
            placeholder="Author"
            value={author}
            onChange={handleAuthorChange}
            required
          />
        </div>
        <div>
          <select className="category" onChange={handleCategoryChange} id="color" name="category">
            <option value={category}>Category</option>
            <option value="Action">Action</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Fiction">Science Fiction</option>
            <option value="Adventure">Adventure</option>
            <option value="Drama & Romance">Drame & Romance</option>
          </select>
        </div>
        <button className="add-book" type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default CreateBook;
