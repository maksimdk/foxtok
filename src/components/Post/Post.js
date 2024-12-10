import React from 'react';

import { Comment, Like, Pause, Play, Share } from '../../icons';
import { Button } from '../Button';

import './Post.css';

export const Post = ({ id, avatar, altText, author, video }) => {
  return (
    <article className="post">
      <img className="post__avatar" src={avatar} alt={altText} />
      <div className="post__content">
        <a className="post__author" href="#">
          {author}
        </a>
        <div className="player js-player">
          <video id={id} className="player__video js-video" src={video}></video>
          <Button className="player__btn btn active js-play" variant="icon">
            <Play />
          </Button>
          <Button className="player__btn btn js-pause" variant="icon">
            <Pause />
          </Button>
        </div>
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
