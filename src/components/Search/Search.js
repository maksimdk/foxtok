import React from 'react';

import { Search as SearchIcon } from '../../icons';

import './Search.css';

export const Search = () => {
  return (
    <form className="search">
      <input className="search__input" type="text" placeholder="Search accounts and videos" />
      <span className="search__border"></span>
      <span className="search__splitter"></span>
      <button className="search__submit" type="submit">
        <SearchIcon className="search__icon" />
      </button>
    </form>
  );
};
