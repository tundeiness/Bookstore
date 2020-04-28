import { combineReducers } from 'redux';
// import books from './books';
import books from './bookList';
// import filter from './filter';

const rootReducers = combineReducers({
  books,
});

export default rootReducers;
