import { LOAD_ALL_BOOK_REQ } from '../actions/actionTypes';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_ALL_BOOK_REQ:
      return action.books;

    default:
      return state;
  }
};


export default bookReducer;
