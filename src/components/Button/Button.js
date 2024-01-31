import React from 'react';
import classNames from 'classnames';

import './Button.css';

export const Button = ({
  className,
  color,
  upper,
  variant,
  href,
  type = 'button',
  children,
  ...props
}) => {
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
      <a
        className={classNames('btn', className, upper, {
          ...colors,
          ...variants,
        })}
        href={href}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={classNames('btn', className, { ...colors, ...variants })}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
