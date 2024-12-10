import React from 'react';

import { Button } from '../Button';
import { Footer } from '../Footer';

import { menu } from './config';

import './SideBar.css';

export const SideBar = () => {
  return (
    <aside className="side-bar">
      <div>
        <nav className="menu">
          {menu.map(({ id, title, Icon, upper, color, href }) => (
            <Button key={id} href={href} className="menu__btn" variant="text" color={color} upper={upper}>
              <Icon className="menu__icon" />
              {title}
            </Button>
          ))}
        </nav>
        <hr />
        <p className="side-bar__text">Log in to follow creators, like videos and view comments</p>
        <Button className="side-bar__btn" variant="outlined" color="primary">
          Log in
        </Button>
        <hr />
      </div>
      <Footer />
    </aside>
  );
};
