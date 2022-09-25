import PropTypes from 'prop-types';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './DefaultLayout.module.scss';
function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className={styles.content}>
                <div className={styles.sidebarWrapper}>
                    <Sidebar />
                </div>
                <div className={styles.contentWrapper}>{children}</div>
            </div>
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
