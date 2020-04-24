import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import options from '../helper/options';


class NewBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };

    this.handleBookChange = this.handleBookChange.bind(this);
    this.handleBookSubmit = this.handleBookSubmit.bind(this);
  }

  handleBookChange(event) {
    // this.setState({ [event.target.name]: event.target.value });
    const names = event.target.name;
    this.setState({
      [names]: event.target.value,
    });
  }

  handleBookSubmit(event) {
    event.preventDefault();
    const url = 'http://localhost:3001/api/v1/books';
    const { title, category } = this.state;
    const { createBook } = this.props;
    const book = { ...this.state, id: Math.floor(Math.random() * 100) };
    createBook(book);

    if (title.length === 0 || category.length === 0) { return; }

    // const body = {
    //   title,
    //   category,
    // };

    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: 'POST',
      headers: {
        'X-CSRF-Token': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(createBook(book)),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(response => response)
      .catch(error => error.error);
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="new-book">
        <span> ADD NEW BOOK </span>
        <form className="input-group" onSubmit={this.handleBookSubmit}>
          <input required name="title" value={title} onChange={this.handleBookChange} className="w-50" type="text" placeholder="Title" />
          <select name="category" value={category} onChange={this.handleBookChange} className="custom-select ml-3">
            <option defaultValue>Choose...</option>
            {options}
          </select>
          <button type="submit" className="btn btn-primary ml-2">ADD BOOK</button>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

NewBook.propTypes = {
  createBook: PropTypes.instanceOf(Function).isRequired,
};

export default connect(null, mapDispatchToProps)(NewBook);


// export default NewBook;
