import { Link } from 'react-router-dom';
import images from '~/assets/images';
import config from '~/config';
import styles from './Header.module.scss';
import { FiSearch, FiPlus } from 'react-icons/fi';
import Button from '~/components/Button';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Link to={config.routes.home} className={styles.logo}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <form className={styles.search}>
                    <input type="text" placeholder="Search accounts and videos" />
                    <span className={styles.divider} />
                    <button type="submit">
                        <FiSearch />
                    </button>
                    <div className={styles.active} />
                </form>

                <div className={styles.actions}>
                    <Button variant="outlined" color="secondary" startIcon={FiPlus}>
                        Upload
                    </Button>
                    <Button variant="contained" color="primary" className={styles.loginBtn}>
                        Log in
                    </Button>
                    <button className={styles.options}>
                        <IoEllipsisVerticalSharp />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
