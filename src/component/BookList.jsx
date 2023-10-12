import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import CreateBook from './CreateBook';

const BookList = () => {
  // Array of book data
  const books = useSelector((state) => state.book.books);
  return (
    <div className="book-list">
      {books.map((book) => (
        <Book
          key={book.author}
          author={book.author}
          title={book.title}
          category={book.category}
        />
      ))}
      <CreateBook />
    </div>
  );
};

export default BookList;
