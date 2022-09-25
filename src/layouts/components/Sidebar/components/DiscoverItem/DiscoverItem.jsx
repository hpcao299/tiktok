import classNames from 'classnames/bind';
import React from 'react';
import styles from './DiscoverItem.module.scss';
import PropTypes from 'prop-types';
import { HashIcon, MusicIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function DiscoverItem({ data }) {
    const renderIcon = () => {
        switch (data.type) {
            case 'tag':
                return <HashIcon />;
            case 'music':
                return <MusicIcon />;
            default:
                return null;
        }
    };

    const renderLink = () => {
        switch (data.type) {
            case 'tag':
                return `/tag/${data.title}`;
            case 'music':
                return `/music/${data.title}`;
            default:
                return null;
        }
    };

    return (
        <Link to={renderLink()} className={cx('item')}>
            <div className={cx('wrapper')}>
                {renderIcon()}
                <p className={cx('title')}>{data.title}</p>
            </div>
        </Link>
    );
}

DiscoverItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default DiscoverItem;
