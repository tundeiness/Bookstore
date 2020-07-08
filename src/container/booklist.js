/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Book from '../component/book';
import { loadBooks, removeBook, filterBook } from '../actions/index';
import CategoryFilter from '../component/categoryFilter';
import filtered from '../helper/filter';

class BookList extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.getTheBooks = this.getTheBooks.bind(this);
  }

  componentDidMount() {
    this.getTheBooks();
  }

  getTheBooks() {
    const { getDbBooks } = this.props;
    const URL = '/v1/books';

    fetch(URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(
        response => getDbBooks(response),
      )
      .catch(error => error);
  }

  handleRemoveBook(book) {
    const { removeDbBook } = this.props;
    removeDbBook(book.id);

    const URL = `/v1/books/${book.id}`;

    fetch(URL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          toast.success('Book successfully removed');
          return response.json();
        }
        throw new Error(toast.error('This Book no longer exist in your store'));
      })
      .then(res => ({ res }))
      .catch(error => error);
  }

  handleFilterChange(e) {
    const { filterBook } = this.props;
    filterBook(e.target.value);
  }

  render() {
    const { books, filter } = this.props;

    return (
      <div className="main">
        <div className="border-header">
          <div className="outer-header">
            <div className="header">
              <h1 className="main-header">Bookstore CMS</h1>
              <span className="top-heading">BOOKS</span>
              <div className="select-wrapper">
                <CategoryFilter key={books.id} category={books.category} books={books} handleFilterChange={this.handleFilterChange} />
              </div>
            </div>
          </div>
        </div>
        <table className="table">
          <tbody>
            {filtered(books, filter).map(books => (<Book key={books.id} books={books} category={books.category} handleRemoveBook={() => this.handleRemoveBook(books)} />))}
          </tbody>
        </table>
        <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  getDbBooks: books => dispatch(loadBooks(books)),
  filterBook: filter => dispatch(filterBook(filter)),
  removeDbBook: book => dispatch(removeBook(book)),
});

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }).isRequired,
  ).isRequired,
  removeDbBook: PropTypes.func.isRequired,
  getDbBooks: PropTypes.func.isRequired,
  filterBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
