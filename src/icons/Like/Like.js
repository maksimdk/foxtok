import React from 'react';
import classNames from 'classnames';

import './Like.css';

export const Like = ({ className }) => {
  return (
    <svg className={classNames(className)}>
      <use href="#like" />
    </svg>
  );
};
