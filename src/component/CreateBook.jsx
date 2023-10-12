import React, { useState } from 'react';
import '../CSS/form.css';

const CreateBook = () => {
  // Define state variables for the book title and author
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  // Handle input changes and update the state variables
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  // Handle form submission (you can add your logic here)
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your code to handle the submission of the book data here
    // For example, you can send an API request to save the book data
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
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <select className="category" onChange={handleAuthorChange} id="color" name="category">
            <option value={author}>Category</option>
            <option value="green">Action</option>
            <option value="blue">Fantasy</option>
            <option value="yellow">Science Fiction</option>
            <option value="purple">Adventure</option>
            <option value="purple">Drame & Romance</option>
          </select>
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default CreateBook;
