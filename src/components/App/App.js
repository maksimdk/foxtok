import React from 'react';

//containers
import { Posts } from '../../containers/Posts';

//components
import { Sprite } from '../Sprite';
import { Header } from '../Header';
import { Container } from '../Container';
import { SideBar } from '../SideBar';

//styles
import './App.css';

export const App = () => {
  return (
    <>
      <Sprite />
      <Header />
      <Container className="main">
        <SideBar />
        <section className="content">
          <Posts />
        </section>
      </Container>
    </>
  );
};
