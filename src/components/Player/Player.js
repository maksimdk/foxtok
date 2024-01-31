import React, { useRef, useState } from 'react';
import classNames from 'classnames';

import { Button } from '../Button';
import { Pause, Play } from '../../icons';

import './Player.css';

const playBackStatus = {
  Stopped: 'stopped',
  Playing: 'playing',
  Paused: 'paused',
};

export const Player = ({ id, src }) => {
  const videoRef = useRef(null);
  const [status, setStatus] = useState(playBackStatus.Stopped);

  const handlePlay = () => {
    setStatus(playBackStatus.Playing);
    videoRef.current.play();
  };
  const handlePause = () => {
    setStatus(playBackStatus.Paused);
    videoRef.current.pause();
  };

  const handleEnded = () => {
    setStatus(playBackStatus.Playing);
    videoRef.current.play();

    // OR
    // setStatus(playBackStatus.Stopped);
    // videoRef.current.currentTime = 0;
  };

  return (
    <div className="player js-player">
      <video
        ref={videoRef}
        id={id}
        className="player__video"
        src={src}
        onEnded={handleEnded}
      ></video>
      <Button
        className={classNames('player__btn', {
          active: [playBackStatus.Stopped, playBackStatus.Paused].includes(
            status,
          ),
        })}
        variant="icon"
        onClick={handlePlay}
      >
        <Play />
      </Button>
      <Button
        className={classNames('player__btn', {
          active: status === playBackStatus.Playing,
        })}
        variant="icon"
        onClick={handlePause}
      >
        <Pause />
      </Button>
    </div>
  );
};
