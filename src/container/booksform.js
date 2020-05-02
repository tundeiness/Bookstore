import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';


class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };
    this.titleRef = React.createRef();
    this.categoryRef = React.createRef();
    this.handleBookChange = this.handleBookChange.bind(this);
    this.handleBookSubmit = this.handleBookSubmit.bind(this);
  }

  handleBookChange(e) {
    const names = e.target.name;
    this.setState({
      [names]: e.target.value,
    });
  }

  handleBookSubmit(e) {
    e.preventDefault();
    const { createBook } = this.props;
    const book = { ...this.state, id: Math.floor(Math.random() * 100) };


    const bookData = {
      // id: Math.floor(Math.random() * 100),
      title: this.titleRef.current.value,
      category: this.categoryRef.current.value,
    };

    createBook(book);
    this.setState({
      title: '',
      category: 'Action',
    });

    const URL = 'http://localhost:3001/api/v1/books';

    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(bookData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .catch(error => error.error);
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="new-book">
        <span> ADD NEW BOOK </span>
        <form className="input-group " onSubmit={this.handleBookSubmit}>
          <input required name="title" value={title} ref={this.titleRef} onChange={this.handleBookChange} className="w-50 " type="text" placeholder="Title" />
          <input name="category" value={category} ref={this.categoryRef} onChange={this.handleBookChange} className="custom-select ml-3" id="category" />
          <button type="submit" className="btn btn-primary ml-2">ADD BOOK</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

BooksForm.propTypes = {
  createBook: PropTypes.instanceOf(Function).isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
