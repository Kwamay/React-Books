import React from 'react';
import Book from './Book';
import CreateBook from './CreateBook';

const BookList = () => {
  // Array of book data
  const books = [
    {
      author: 'Author 1',
      title: 'Book 1',
      category: 'Category A',
    },
    {
      author: 'Author 2',
      title: 'Book 2',
      category: 'Category B',
    },
    {
      author: 'Author 3',
      title: 'Book 3',
      category: 'Category C',
    },
  ];

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
