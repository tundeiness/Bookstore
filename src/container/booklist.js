/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../component/book';
import { loadBooks, removeBook } from '../actions/index';
import Options from '../helper/options';
// import Count from '../helper/count';


class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionState: 'All Books',
    };


    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.getTheBooks = this.getTheBooks.bind(this);
    // this.removeTheBook = this.removeTheBook.bind(this);
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
        response => getDbBooks(response),
      )
      .catch(error => error);
  }

  handleOptionChange(event) {
    // event.preventDefault();
    // const { optionState } = this.state;
    this.setState({ optionState: event.target.value });
  }


  handleRemoveBook(book) {
    const { removeDbBook } = this.props;
    removeDbBook(book);

    const URL = `http://localhost:3001/api/v1/books/${id}`;

    fetch(URL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('This Book no longer exist in your list');
      })
      .then(() => { this.redirect(); })
      .catch(error => error);
  }

  // handleFilterChange(e) {
  //   const { filterBook } = this.props;
  //   filterBook(e.target.value);
  // }

  render() {
    const { books } = this.props;
    const { optionState } = this.state;
    // const filteredCategory = books.filter(book => book.category !== book);
    // const filteredCategory = category => (
    //   books.filter(book => book.category !== category)
    // );

    // const filteredCategory = category => (
    //   books.filter(book => book.category.includes(!category))
    // );


    const categoryList = books.map(q => q.category);

    const result = categoryList.filter((q, idx) => categoryList.indexOf(q) === idx);

    const catList = [...new Set(books.map(item => item.category))];
    console.log('result=>', catList);
    console.log('result=>', result);
    // const count = books.length;


    // {names.filter(name => name.includes('J')).map(filteredName => (
    //   <li>
    //     {filteredName}
    //   </li>
    // ))}
    // console.log('bookie =>', books);
    // <Count count={count} />

    return (
      <div className="main">
        <div className="border-header">
          <div className="outer-header">
            <div className="header">
              <h1 className="main-header">Bookstore CMS</h1>
              <span>BOOKS</span>
              {/* <div> */}
              {/* <CategoryFilter handleFilterChange={this.handleFilterChange} /> */}
              {/* <Options books={books} /> */}
              <select value={optionState} onChange={this.handleOptionChange}>
                <option key={books.id} value="All_Books">All Books</option>
                {/* {books.map(books => (<Options key={books.id} books={books} category={books.category} />))} */}
                {books.map(books => (<Options key={books.id} books={books} category={books.category} />))}
                {/* {result.map((res, idx) => (<Options key={idx} books={books} category={res} />))} */}
              </select>
              {/* </div> */}
              {/* <Count books={books} /> */}
            </div>
          </div>
        </div>
        <table className="table">
          {/* <tbody>{filtered(books, filter).map(book => (<Book key={book.id} book={book} handleRemoveBook={() => this.handleRemoveBook(book)} />))}</tbody> */}
          <tbody>
            {books.map(books => (<Book key={books.id} books={books} title={books.title} category={books.category} />))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,

});

const mapDispatchToProps = dispatch => ({
  getDbBooks: books => dispatch(loadBooks(books)),
  removeDbBook: book => dispatch(removeBook(book)),
  // filterBook: filter => dispatch(filterBook(filter)),
});

BookList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
  removeDbBook: PropTypes.func.isRequired,
  // filterBook: PropTypes.func.isRequired,
  getDbBooks: PropTypes.func.isRequired,
  // filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
