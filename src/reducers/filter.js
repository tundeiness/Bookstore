
import { FILTER_BOOK_REQ } from '../actions/actionTypes';

const filterBook = (state = 'All_Books', action) => {
  switch (action.type) {
    case FILTER_BOOK_REQ:
      return action.filter;
    default:
      return state;
  }
};

export default filterBook;
