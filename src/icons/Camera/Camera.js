import React from 'react';
import classNames from 'classnames';

import './Camera.css';

export const Camera = ({ className }) => {
  return (
    <svg className={classNames(className)}>
      <use href="#home" />
    </svg>
  );
};
