// bookSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: '1',
      title: 'Game of thrones',
      author: 'Nicholas',
      category: 'Adventure',
    },
    {
      id: '2',
      title: 'God Father',
      author: 'Kwamay',
      category: 'Action',
    },
    {
      id: '3',
      title: 'Water Reunion',
      author: 'Madaline Kiss',
      category: 'Fantasy',
    },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
