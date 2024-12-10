import React from 'react';
import classNames from 'classnames';

import './Play.css';

export const Play = ({ className }) => {
  return (
    <svg className={classNames(className)}>
      <use href="#play" />
    </svg>
  );
};
