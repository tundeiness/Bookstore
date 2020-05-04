import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './component/App';
import rootReducers from './reducers/index';
import 'react-toastify/dist/ReactToastify.css';

const BOOKS = {
  books: [
    {
      id: 1,
      title: 'Little Women',
      category: 'Classics',
    },
    {
      id: 2,
      title: '1984',
      category: 'Sci-Fi',
    },
    {
      id: 3,
      title: 'The Lord of the Rings',
      category: 'Fantasy',
    },
    {
      id: 4,
      title: 'The Odyssey',
      category: 'Legend',
    },
  ],

};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers, BOOKS, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
