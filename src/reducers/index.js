import { combineReducers } from 'redux';
// import books from './books';
import books from './bookList';
import createBooks from './createBook';
// import filter from './filter';

const rootReducers = combineReducers({
  books,
  createBooks,
});

export default rootReducers;
