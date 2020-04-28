import { LOAD_ALL_BOOK_REQ, CREATE_BOOK_REQ, REMOVE_BOOK_REQ } from './actionTypes';


const loadBooks = books => ({ type: LOAD_ALL_BOOK_REQ, books });


const createBook = book => ({ type: CREATE_BOOK_REQ, book });


const removeBook = book => ({ type: REMOVE_BOOK_REQ, book });


// const filterCategory = filter => ({
//   type: 'FILTER_CATEGORY',
//   payload: filter,
// });


// const filterBook = filter => ({
//   type: 'FILTER_BOOK',
//   filter,
// });

export {
  loadBooks, createBook, removeBook,
};

// GET & POST /api/v1/books
// DELETE /api/v1/books/:id
