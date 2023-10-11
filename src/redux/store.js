import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './categories/categoriesSlice';
import bookReducer from './books/booksSlice';

const rootReducer = combineReducers({ book: bookReducer, categories: categoryReducer });
const store = configureStore({ reducer: rootReducer });

export default store;
