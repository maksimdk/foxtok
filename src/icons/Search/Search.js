import React from 'react';

export const Search = ({ className }) => {
  return (
    <svg className={className}>
      <use href="#search" />
    </svg>
  );
};
