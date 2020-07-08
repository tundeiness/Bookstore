import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
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

  handleBookSubmit() {
    const { createBook } = this.props;
    const { size } = this.props;
    const newId = size + 1;

    const bookData = {
      id: newId,
      title: this.titleRef.current.value,
      category: this.categoryRef.current.value,
    };

    createBook(bookData);
    this.setState({
      title: '',
      category: 'Action',
    });

    const URL = 'https://rails-bookstore-backend.herokuapp.com/api/v1/books';

    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        id: newId,
        title: this.titleRef.current.value,
        category: this.categoryRef.current.value,
      }),
      headers: {

        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          toast.success('Book Added');
          return response.json();
        }
        throw new Error(toast.error('This Book either exist in store or it was not created'));
      })
      .then(res => ({ res }))
      .catch(error => error);
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
        <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  size: state.books.length,
});

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

BooksForm.propTypes = {
  createBook: PropTypes.instanceOf(Function).isRequired,
  size: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
