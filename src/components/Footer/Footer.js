import React from 'react';
import { footer } from './config';

import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__menu">
        {footer.map(({ id, title, href }) => (
          <a key={id} href={href} className="footer__link">
            {title}
          </a>
        ))}
      </nav>
      <p>&copy; FoxTok</p>
    </footer>
  );
};
