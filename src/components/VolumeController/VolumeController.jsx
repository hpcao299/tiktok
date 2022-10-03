import classNames from 'classnames/bind';
import { MuteIcon, SoundIcon } from '~/components/Icons';
import styles from './VolumeController.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function VolumeController({ className }) {
    return (
        <div className={`${className} ${cx('wrapper')}`}>
            <button>
                <MuteIcon />
            </button>
            <button>
                <SoundIcon />
            </button>
            <input type="range" min={0} max={1} step={0.05} className={cx('volume')} />
        </div>
    );
}

VolumeController.propTypes = {
    className: PropTypes.string,
};

export default VolumeController;
