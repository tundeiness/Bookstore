/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
// import Books from './book';

const Book = ({ books, handleRemoveBook }) => {
  // const { book, handleRemoveBook } = props;
  // const test = () => (<tbody>{ books.map(book => (<Book key={book.id} book={book} handleRemoveBook={() => handleRemoveBook(books)} />))}</tbody>);
  console.log(books);

  return (
    <div className="main">
      <div className="border-header">
        <div className="outer-header">
          <div className="header">
            <h1 className="main-header">Bookstore CMS</h1>
            <span>BOOKS</span>
            <div>
              {/* <CategoryFilter handleFilterChange={this.handleFilterChange} /> */}
              {/* <Options book={book} /> */}
            </div>
          </div>
        </div>
      </div>
      <table className="table">
        {/* <tbody>{filtered(books, filter).map(book => (<Book key={book.id} book={book} handleRemoveBook={() => this.handleRemoveBook(book)} />))}</tbody> */}
        {/* { test } */}
        <tbody>
          {/* { books.map(book => (<Book key={book.id} book={book} handleRemoveBook={() => handleRemoveBook(books)} />))} */}
        </tbody>
        <tbody>
          <tr className="book-container">
            <th className="book-category">{ books.category }</th>
            <th className="book-title">{ books.title }</th>
            <th className="remove-book">
              <button type="button" onClick={handleRemoveBook}>Remove Book</button>
            </th>
          </tr>
          {/* <Book /> */}
        </tbody>
      </table>
    </div>
  );
};


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
