import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './component/App';
import rootReducer from './reducers/index';

const BOOKS = {
  books: [
    {
      id: 0,
      title: 'Little Women',
      category: 'Classics',
    },
    {
      id: 1,
      title: '1984',
      category: 'Sci-Fi',
    },
    {
      id: 2,
      title: 'The Lord of the Rings',
      category: 'Fantasy',
    },
    {
      id: 3,
      title: 'The Odyssey',
      category: 'Legend',
    },
  ],

};

const store = createStore(rootReducer, BOOKS, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
