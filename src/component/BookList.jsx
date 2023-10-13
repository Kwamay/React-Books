import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import CreateBook from './CreateBook';
import { getBooks } from '../redux/books/booksSlice';

const BookList = () => {
  // Array of book data
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div className="book-list">
      {books.map((book) => (
        <Book
          id={book.item_id}
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
