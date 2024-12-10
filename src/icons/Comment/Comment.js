import React from 'react';
import classNames from 'classnames';

import './Comment.css';

export const Comment = ({ className }) => {
  return (
    <svg className={classNames(className)}>
      <use href="#comment" />
    </svg>
  );
};
