import React from 'react';

import './Search.css';

export const Search = ({ className }) => {
  return (
    <svg className={className}>
      <use href="#search" />
    </svg>
  );
};
