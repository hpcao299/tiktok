import classNames from 'classnames/bind';
import { FaCommentDots, FaHeart, FaPlay, FaShare } from 'react-icons/fa';
import { FlagIcon, PauseIcon } from '~/components/Icons';
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
                <button className={cx('report-btn')}>
                    <FlagIcon />
                    Report
                </button>
            </div>
            <div className={cx('video-actions')}>
                <button>
                    <FaHeart />
                </button>
                <span>48.6k</span>
                <button>
                    <FaCommentDots />
                </button>
                <span>123</span>
                <button>
                    <FaShare />
                </button>
                <span>785</span>
            </div>
        </div>
    );
}

export default VideoDisplay;
