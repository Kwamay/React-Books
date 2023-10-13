// bookSlice.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = 'uvoKogb5K4j0ehIhDE2a';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

const ADD_BOOK = 'books/booksSlice/ADD_BOOK';
const REMOVE_BOOK = 'books/booksSlice/REMOVE_BOOK';
const GET_BOOK = 'books/booksSlice/GET_BOOK';

const initialState = [];

export const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await axios.post(`${baseUrl}${apiKey}/books`, book);
  return book;
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  const itemId = id;
  await axios.delete(`${baseUrl}${apiKey}/books/${itemId}`, itemId);
  return id;
});

export const getBooks = createAsyncThunk(GET_BOOK, async () => {
  const response = await axios.get(`${baseUrl}${apiKey}/books`);
  const { data } = response; // Axios automatically parses JSON
  const arr = [];
  const keys = Object.keys(data);
  keys.forEach((key) => {
    arr.push({
      itemId: key,
      title: data[key][0].title,
      author: data[key][0].author,
      category: data[key][0].category,
    });
  });
  return arr;
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.item_id !== action.payload);
    case `${GET_BOOK}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default bookReducer;
