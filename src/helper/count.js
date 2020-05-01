// import React from 'react';
import PropTypes from 'prop-types';

const Count = ({ count }) => (
  count
);


Count.propTypes = {
  books: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
    map: PropTypes.instanceOf(Function),
  }).isRequired,

};

export default Count;
