import { useState } from 'react';
import { Form, SearchButton, SearchInput } from './SearchForm.styled';
import propTypes from 'prop-types';
import { BiSearchAlt } from 'react-icons/bi';

const SearchForm = ({ onSubmit }) => {
  const [queryValue, setQueryValue] = useState('');
  // state = {
  //   queryValue: '',
  // };

  const handleImputChange = event => {
    const { value } = event.currentTarget;

    setQueryValue(value);
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    if (queryValue.trim() === '') {
      return;
    }
    onSubmit(queryValue.toLowerCase());
    setQueryValue('');
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <SearchButton type="submit">
        <BiSearchAlt size="32" />
      </SearchButton>

      <SearchInput
        type="text"
        autoComplete="off"
        autoFocus
        placeolder="Search images and photos"
        onChange={handleImputChange}
        value={queryValue}
      />
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default SearchForm;
