import React from 'react';
import classNames from 'classnames';

import './Users.css';

export const Users = ({ className }) => {
  return (
    <svg className={classNames(className)}>
      <use href="#users" />
    </svg>
  );
};
