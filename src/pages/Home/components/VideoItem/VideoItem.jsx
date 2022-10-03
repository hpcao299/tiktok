import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { MusicIcon, TickIcon } from '~/components/Icons';
import VideoDisplay from './VideoDisplay';
import styles from './VideoItem.module.scss';

const cx = classNames.bind(styles);

function VideoItem() {
    return (
        <div className={cx('video')}>
            <Link to="/">
                <img
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/dab2fbac6d703a59107ed7cac91d09be.jpeg?x-expires=1664247600&x-signature=9lveJxYAJDUMkKsjYVrOZH63zVI%3D"
                    alt=""
                    loading="true"
                    className={cx('avatar')}
                />
            </Link>
            <div className={cx('content-container')}>
                <div className={cx('user-info-container')}>
                    <Link to="/" className={cx('author-container')}>
                        <h3 className={cx('author-title')}>
                            hoangvinhhh <TickIcon className={cx('tick-icon')} />
                        </h3>
                        <h4 className={cx('author-name')}>Nguyễn Hoàng Vinh</h4>
                    </Link>
                    <p className={cx('video-desc')}>
                        <span>Cũng đú trend nhưng lạ lắm 🤣🤣 </span>
                        <Link to="/" className={cx('video-tag')}>
                            #VinhMC
                        </Link>
                    </p>
                    <h4 className={cx('video-music-info')}>
                        <Link to="/">
                            <MusicIcon />
                            <span>Đừng mà - 🌼✨KimJenmy🧸💐</span>
                        </Link>
                    </h4>
                </div>
                <VideoDisplay />
                <Button variant="outlined" className={cx('follow-btn')} size="small">
                    Follow
                </Button>
            </div>
        </div>
    );
}

export default VideoItem;
