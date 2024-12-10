import React from 'react';
import classNames from 'classnames';

import './Logo.css';

export const Logo = ({ className }) => {
  return (
    <svg className={classNames('logo', className)}>
      <use href="#logo" />
    </svg>
  );
};
