import React from 'react';
import Delete from './Delete';
import '../CSS/book.css';

const Book = (props) => {
  const { category, title, author } = props;
  return (
    <div className="book-container">
      <div>
        <p>{category}</p>
        <h3>{title}</h3>
        <small>{author}</small>
        <div>
          <button type="button">Comments</button>
          <Delete />
          <button type="button">Edit</button>
        </div>
      </div>
      <div>
        <div>Circle</div>
        <p>
          64%
          <span>completed</span>
        </p>
      </div>
      <div>
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );
};
export default Book;
