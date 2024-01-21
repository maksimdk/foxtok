import React from 'react';

import { Button } from '../Button';
import { Pause, Play } from '../../icons';

import './Player.css';

export const Player = ({ src, id }) => {
  return (
    <div className="player js-player">
      <video id={id} className="player__video js-video" src={src}></video>
      <Button className="player__btn active js-play" variant="icon">
        <Play />
      </Button>
      <Button className="player__btn js-pause" variant="icon">
        <Pause />
      </Button>
    </div>
  );
};
