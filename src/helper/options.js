import React from 'react';
import PropTypes from 'prop-types';

const Options = ({ books }) => (

  <>
    <option key={books.id}>{books.category}</option>
  </>
);


Options.propTypes = {
  books: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
    map: PropTypes.instanceOf(Function),
  }).isRequired,

};

export default Options;
