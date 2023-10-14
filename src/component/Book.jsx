import React from 'react';
import Delete from './Delete';
import '../CSS/book.css';

const Book = (props) => {
  const {
    id, category, title, author,
  } = props;
  return (
    <div className="book-container">
      <div className="book-details">
        <p className="category">{category}</p>
        <h3 className="title">{title}</h3>
        <small className="author">{author}</small>
        <div className="button-container">
          <button className="action-button" type="button">Comments</button>
          <Delete id={id} />
          <button type="button" className="action-button">Edit</button>
        </div>
      </div>
      <div className="percentage-container">
        <div className="circle" />
        <p className="percentage">
          64%
          <span className="completed">Completed</span>
        </p>
      </div>
      <div className="chapter-container">
        <p className="cur-chapter">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 17</p>
        <button className="update" type="button">Update Progress</button>
      </div>
    </div>
  );
};
export default Book;
