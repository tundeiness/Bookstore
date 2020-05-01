import {
  LOAD_ALL_BOOK_REQ, CREATE_BOOK_REQ, REMOVE_BOOK_REQ, FILTER_BOOK_REQ,
} from './actionTypes';


const loadBooks = books => ({ type: LOAD_ALL_BOOK_REQ, books });


const createBook = book => ({ type: CREATE_BOOK_REQ, book });


const removeBook = book => ({ type: REMOVE_BOOK_REQ, book });

const filterBook = filter => ({ type: FILTER_BOOK_REQ, filter });


// const createBook = book => ({
//   type: 'CREATE_BOOK',
//   payload: book,
// });

// const loadBooks = book => ({
//   type: 'LOAD_BOOK',
//   payload: book,
// });

// const removeBook = book => ({
//   type: 'REMOVE_BOOK',
//   payload: book.id,
// });

// const filterBook = filter => ({
//   type: 'FILTER_BOOK',
//   filter,
// });

export {
  createBook, loadBooks, removeBook, filterBook,
};
