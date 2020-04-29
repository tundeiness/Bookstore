import { REMOVE_BOOK_REQ } from '../actions/actionTypes';

const removeBookReducer = (state = '', action) => {
  switch (action.type) {
    case REMOVE_BOOK_REQ:
      return state.filter(book => book.id !== action.payload);

    default:
      return state;
  }
};


export default removeBookReducer;
