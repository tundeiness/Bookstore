/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';


const Book = ({ books, handleRemoveBook }) => (
  <div className="main">
    <table className="table">
      <tbody>
        <tr className="book-container">
          <th className="book-category">{ books.category }</th>
          <th className="book-title">{ books.title }</th>
          <th className="remove-book">
            <button type="button" onClick={handleRemoveBook}>Remove Book</button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
);


Book.propTypes = {
  books: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
    map: PropTypes.instanceOf(Function),
  }).isRequired,
  handleRemoveBook: PropTypes.instanceOf(Function).isRequired,
};

export default Book;
