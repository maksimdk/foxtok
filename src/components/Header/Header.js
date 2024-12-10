import React from 'react';

// components
import { Container } from '../Container';
import { Search } from '../Search';
import { Button } from '../Button';

// icons
import { Logo, Plus } from '../../icons';

// styles
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <Container className={'header__container'}>
        <Logo />
        <Search />
        <div className="header__buttons">
          <Button href="#" variant="outlined">
            <Plus />
            Upload
          </Button>
          <Button color="primary">Log in</Button>
        </div>
      </Container>
    </header>
  );
};
