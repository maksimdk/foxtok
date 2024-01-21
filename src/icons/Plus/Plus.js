import React from 'react';

export const Plus = ({ className }) => {
  return (
    <svg className={className}>
      <use href="#plus" />
    </svg>
  );
};
