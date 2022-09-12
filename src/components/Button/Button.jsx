import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({
    children,

    // Color props
    color = 'primary',

    // Variant props
    variant = 'contained',

    // Size props
    size = 'medium',

    // Icon component props
    startIcon,
    endIcon,

    // Custom component props
    component = 'button',

    styles,
    className,
}) {
    const StartIcon = startIcon;
    const EndIcon = endIcon;
    const Component = component;

    return (
        <Component
            styles={styles}
            className={cx('button', className, {
                // Color styles
                primary: color === 'primary',
                secondary: color === 'secondary',

                // Variant styles
                contained: variant === 'contained',
                outlined: variant === 'outlined',

                // Size styles
                medium: size === 'medium',
                small: size === 'small',
            })}
        >
            {startIcon && <StartIcon className={cx('startIcon')} />}
            {children}
            {endIcon && <EndIcon className={cx('endIcon')} />}
        </Component>
    );
}

Button.propTypes = {
    children: PropTypes.node,

    color: PropTypes.oneOf(['primary', 'secondary']),
    variant: PropTypes.oneOf(['contained', 'outlined']),
    size: PropTypes.oneOf(['medium', 'small']),

    startIcon: PropTypes.elementType,
    endIcon: PropTypes.elementType,

    component: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
};

export default Button;
