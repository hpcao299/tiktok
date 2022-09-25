import { Link, useLocation } from 'react-router-dom';
import styles from './LinkItem.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LinkItem({ children, to, icon, activeIcon }) {
    const { pathname } = useLocation();
    const Icon = icon;
    const ActiveIcon = activeIcon;
    const isActive = pathname === to;

    return (
        <Link className={cx('item', { active: isActive })} to={to}>
            {isActive ? <ActiveIcon /> : <Icon />}
            <span>{children}</span>
        </Link>
    );
}

LinkItem.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
    // icon: PropTypes.elementType,
    // activeIcon: PropTypes.elementType,
};

export default LinkItem;
