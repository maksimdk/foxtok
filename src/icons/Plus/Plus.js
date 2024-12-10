import React from 'react';

import './Plus.css';

export const Plus = ({ className }) => {
  return (
    <svg className={className}>
      <use href="#plus" />
    </svg>
  );
};
