import React from 'react';

import classNames from 'classnames/bind';

import './Button.css';

export const Button = ({ variant, color, className, upper, href, type = 'button', children, ...props }) => {
  const colors = {
    primary: color === 'primary',
  };
  const variants = {
    outlined: variant === 'outlined',
    text: variant === 'text',
    icon: variant === 'icon',
  };
  if (href) {
    return (
      <a className={classNames('btn', className, { upper, ...variants, ...colors })} href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={classNames('btn', className, { ...variants, ...colors })} type={type} {...props}>
      {children}
    </button>
  );
};
