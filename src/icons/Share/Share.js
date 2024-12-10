import React from 'react';
import classNames from 'classnames';

import './Share.css';

export const Share = ({ className }) => {
  return (
    <svg className={classNames(className)}>
      <use href="#share" />
    </svg>
  );
};
