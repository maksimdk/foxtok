import React from 'react';
import classNames from 'classnames';

import './Home.css';

export const Home = ({ className }) => {
  return (
    <svg className={classNames(className)}>
      <use href="#home" />
    </svg>
  );
};
