import { CREATE_BOOK_REQ } from '../actions/actionTypes';

const createBookReducer = (state = '', action) => {
  switch (action.type) {
    case CREATE_BOOK_REQ:
      return [...state,
        action.payload];

    default:
      return state;
  }
};


export default createBookReducer;
