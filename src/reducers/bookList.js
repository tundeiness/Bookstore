import { LOAD_ALL_BOOK_REQ, REMOVE_BOOK_REQ } from '../actions/actionTypes';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_ALL_BOOK_REQ:
      return action.books;
    case REMOVE_BOOK_REQ:
      return state.filter(book => book.id !== action.payload);

    default:
      return state;
  }
};


export default bookReducer;
