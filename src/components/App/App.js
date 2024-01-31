import React, { createRef, Fragment } from 'react';

import { Sprite } from '../Sprite';
import { Header } from '../Header';
import { Container } from '../Container';
import { SideBar } from '../SideBar';
import { Post } from '../Post';

import { posts } from './config';

import './App.css';

export const App = () => {
  const imgRef = createRef();

  const showImg = () => {
    console.log(imgRef);
  };

  const initRef = (ref) => {
    if (!imgRef.current) {
      imgRef.current = [];
    }
    imgRef.current.push(ref);
  };

  return (
    <>
      <Sprite />
      <Header />
      <Container className="main">
        <SideBar />
        <section className="content">
          {posts.map((data, index) => (
            <Fragment key={data.id}>
              <Post ref={initRef} {...data} showImg={showImg} />
              {posts.length - 1 > index ? <hr /> : null}
            </Fragment>
          ))}
        </section>
      </Container>
    </>
  );
};
