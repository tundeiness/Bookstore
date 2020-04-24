/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterCategory } from '../actions/index';

const category = ['Action', 'Classics', 'Drama', 'Fantasy', 'Sci-Fi', 'Legend'];
const options = category.map(item => <option key={item} value={item}>{item}</option>);

class Options extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
    };
    // this.handleRemoveFromFavourite = this.handleRemoveFromFavourite.bind(this);
    // this.handleRemoveDuplicates = this.handleRemoveDuplicates.bind(this);
  }

  componentDidMount() {
    const { filterCategory } = this.props;
    const URL = 'http://localhost:3001/api/v1/books';
    fetch(URL)
      .then(response => {
        if (response.ok) {
          filterCategory(response.data);
          return response.json();
        }
        throw new Error('Network Error.');
      })
      .then(response => this.setState({ category: [...response.data] }))
      .catch(error => error);
  }

  // handleRemoveDuplicates(id) {
  //   const { category } = this.state;
  //   const URL = 'http://localhost:3001/api/v1/books';
  //   fetch(URL)
  //     .then(response => {
  //       if (response.ok) {
  //         this.setState({ category: category.filter(item => item.id !== id) });
  //         return response.json();
  //       }
  //       throw new Error('Network Error.');
  //     })
  //     .then(response => this.setState({ category: [...response.data] }))
  //     .catch(error => error);
  // }

  render() {
    const { category } = this.state;
    // const filteredCategory = category.filter((v, i, a) => a.indexOf(v) ===
    // i);
    // const filtered = (keys, category) => {
    //   const newObj = [];
    //   Object.keys(category).forEach(key => {
    //     if (keys.includes(key)) {
    //       newObj.push(category[key]);
    //     }
    //   });
    //   return newObj;
    // };

    const filtered = category.filter(obj => Object.keys(obj).reduce((acc, curr) => acc || obj[curr], false));


    // const filteredCategory = category.filter(item => item.category !== category);
    const options = filtered.map(item => <option key={item.id} value={item.category}>{item.category}</option>);

    return (
      <>
        {options}
      </>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  filterCategory: book => dispatch(filterCategory(book)),
});

Options.propTypes = {
  filterCategory: PropTypes.instanceOf(Function).isRequired,
};

export default connect(null, mapDispatchToProps)(Options);


// export default Options;
