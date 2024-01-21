import React from 'react';

export const Home = ({ className }) => {
  return (
    <svg className={className}>
      <use href="#home" />
    </svg>
  );
};
