import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Delete = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const handleDelete = (event) => {
    dispatch(removeBook(event.target.id));
  };

  return (
    <button id={id} type="button" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default Delete;
