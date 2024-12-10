import React from 'react';
import classNames from 'classnames';

import './Pause.css';

export const Pause = ({ className }) => {
  return (
    <svg className={classNames(className)}>
      <use href="#pause" />
    </svg>
  );
};
