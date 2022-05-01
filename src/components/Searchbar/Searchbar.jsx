import React from 'react';
import { HeaderSearchBar } from './HeaderSearchBar.styled';

const Searchbar = ({ children }) => (
  <HeaderSearchBar>{children}</HeaderSearchBar>
);

export default Searchbar;
