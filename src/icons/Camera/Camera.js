import React from 'react';

export const Camera = ({ className }) => {
  return (
    <svg className={className}>
      <use href="#camera" />
    </svg>
  );
};
