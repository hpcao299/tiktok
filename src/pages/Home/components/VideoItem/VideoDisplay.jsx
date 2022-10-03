import classNames from 'classnames/bind';
import { FaPlay } from 'react-icons/fa';
import { PauseIcon } from '~/components/Icons';
import VolumeController from '~/components/VolumeController';
import styles from './VideoItem.module.scss';

const cx = classNames.bind(styles);

function VideoDisplay() {
    return (
        <div className={cx('video-container')}>
            <div className={cx('video-display')}>
                <img
                    src="https://files.fullstack.edu.vn/f8-tiktok/videos/422-63391244e0417.jpg"
                    alt="Tiktok"
                />
                <video loop>
                    <source src="https://files.fullstack.edu.vn/f8-tiktok/videos/422-6339124417272.mp4" />
                </video>
                <div className={cx('video-play')}>
                    <button className={cx('play-btn')}>
                        <FaPlay />
                    </button>
                    <button className={cx('pause-icon')}>
                        <PauseIcon />
                    </button>
                </div>
                <VolumeController className={cx('video-sound')} />
            </div>
        </div>
    );
}

export default VideoDisplay;
