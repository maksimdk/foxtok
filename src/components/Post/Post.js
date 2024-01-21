import React from 'react';

import { Button } from '../Button';
import { Comment, Like, Share } from '../../icons';
import { Player } from '../Player';

import './Post.css';

export const Post = ({ id, avatar, altText, author, video }) => {
  return (
    <article className="post">
      <img className="post__avatar" src={avatar} alt={altText} />
      <div className="post__content">
        <a className="post__author" href="#">
          {author}
        </a>
        <Player id={id} src={video} />
      </div>
      <div className="post__actions">
        <Button variant="icon">
          <Like />
        </Button>
        <Button variant="icon">
          <Comment />
        </Button>
        <Button variant="icon">
          <Share />
        </Button>
      </div>
    </article>
  );
};
