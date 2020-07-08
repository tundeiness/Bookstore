/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = props => {
  const { books, handleFilterChange } = props;
  return (
    <div>
      <select onChange={handleFilterChange} className="custom-select ml-3">
        <option value="All_Books">All Books</option>
        {books.map(books => (<option value={books.category} key={books.id} books={books} category={books.category}>{books.category}</option>))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
      map: PropTypes.instanceOf(Function),
    }).isRequired,
  ).isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
