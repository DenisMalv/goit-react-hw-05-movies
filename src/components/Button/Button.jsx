import React from 'react';
import propTypes from 'prop-types';
import { LoadMoreButton } from './Button.styled';

// import Loader from '../Loader/Loader';

const Button = ({ nextPage }) => {
  return (
    <LoadMoreButton type="button" onClick={nextPage}>
      Load More
    </LoadMoreButton>
  );
  // }
};

Button.propTypes = {
  nextPage: propTypes.func.isRequired,
};

export default Button;
