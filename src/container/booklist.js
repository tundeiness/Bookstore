/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../component/book';
import { removeBook, loadBooks } from '../actions';
import Options from '../helper/options';


class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.getTheBooks = this.getTheBooks.bind(this);
  }

  componentDidMount() {
    this.getTheBooks();
  }

  getTheBooks() {
    const { getDbBooks } = this.props;

    const url = 'http://localhost:3001/api/v1/books';
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(
        response => getDbBooks(response.data),
      )
      .catch(error => error);
  }


  handleRemoveBook(book) {
    const { removeBook } = this.props;
    removeBook(book);
  }

  // handleFilterChange(e) {
  //   const { filterBook } = this.props;
  //   filterBook(e.target.value);
  // }

  render() {
    const { books } = this.props;

    return (
      <div className="main">
        <div className="border-header">
          <div className="outer-header">
            <div className="header">
              <h1 className="main-header">Bookstore CMS</h1>
              <span>BOOKS</span>
              <div>
                {/* <CategoryFilter handleFilterChange={this.handleFilterChange} /> */}
                <Options books={books} />
              </div>
            </div>
          </div>
        </div>
        <table className="table">
          {/* <tbody>{filtered(books, filter).map(book => (<Book key={book.id} book={book} handleRemoveBook={() => this.handleRemoveBook(book)} />))}</tbody> */}
          <tbody>
            <Book books={books} />
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
  // filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  getDbBooks: books => dispatch(loadBooks(books)),
  removeBook: book => dispatch(removeBook(book)),
  // filterBook: filter => dispatch(filterBook(filter)),
});

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }).isRequired,
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
  // filterBook: PropTypes.func.isRequired,
  getDbBooks: PropTypes.func.isRequired,
  // filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
