import React, { Fragment } from 'react';

import { Sprite } from '../Sprite';
import { Header } from '../Header';
import { Container } from '../Container';
import { SideBar } from '../SideBar';
import { Post } from '../Post';

import { posts } from './config';

import './App.css';

export const App = () => {
  return (
    <>
      <Sprite />
      <Header />
      <Container className="main">
        <SideBar />
        <section className="content">
          {posts.map((data, index) => (
            <Fragment key={data.id}>
              <Post {...data} />
              {posts.length - 1 > index ? <hr /> : null}
            </Fragment>
          ))}
        </section>
      </Container>
    </>
  );
};
