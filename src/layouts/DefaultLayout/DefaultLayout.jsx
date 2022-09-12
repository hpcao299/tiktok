import PropTypes from 'prop-types';
import Header from '../components/Header';
import styles from './DefaultLayout.module.scss';
function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.content}>{children}</div>
            </div>
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
