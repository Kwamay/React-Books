import { v4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [];

const books = [
  {
    author: 'Author 1',
    title: 'Book 1',
    category: 'Category A',
    id: v4(),
  },
  {
    author: 'Author 2',
    title: 'Book 2',
    category: 'Category B',
    id: v4(),
  },
  {
    author: 'Author 3',
    title: 'Book 3',
    category: 'Category C',
    id: v4(),
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.content,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => (book.id !== action.id));
    default: return books || state;
  }
};

export const addnewBook = (id, title, author) => ({
  type: ADD_BOOK,
  content: {
    id,
    title,
    author,
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default bookReducer;
