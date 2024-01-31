import React, { forwardRef, useRef, useState } from 'react';
import classNames from 'classnames';
import {Button} from '../Button';
import {Comment, Like, Pause, Play, Share} from '../../icons';

import './Post.css';

const playbackStatus = {
    Stopped: 'stopped',
    Playing: 'playing',
    Paused: 'paused',
};

export const Post = forwardRef(({
                                    id,
                                    avatar,
                                    altText,
                                    author,
                                    video,
                                    showImg,
                                }, ref) => {
    const videoRef = useRef(null);
    const [status, setStatus] = useState(playbackStatus.Stopped);

    const handlePlay = () => {
        showImg();
        setStatus(playbackStatus.Playing);
        videoRef.current.play();
    };

    const handlePause = () => {
        setStatus(playbackStatus.Paused);
        videoRef.current.pause();
    };

    const handleEnded = () => {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
    }

    return (
        <article className="post">
            <img
                ref={ref}
                className="post__avatar"
                src={avatar}
                alt={altText}
            />
            <div className="post__content">
                <a className="post__author" href="#">{author}</a>
                <div className="player">
                    <video
                        ref={videoRef}
                        id={id}
                        className="player__video"
                        src={video}
                        onEnded={handleEnded}
                    ></video>
                    <Button
                        className={classNames('player__btn', {
                            active: [playbackStatus.Stopped, playbackStatus.Paused].includes(status),
                        })}
                        variant="icon"
                        onClick={handlePlay}
                    >
                        <Play />
                    </Button>
                    <Button
                        className={classNames('player__btn', { active: status === playbackStatus.Playing })}
                        variant="icon"
                        onClick={handlePause}
                    >
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
});