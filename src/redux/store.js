import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import bookReducer from './books/booksSlice';

const rootReducer = combineReducers({ book: bookReducer });
const store = configureStore({ reducer: rootReducer });

export default store;
