import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';
import PropTypes from 'prop-types';
import { TickIcon } from '~/components/Icons';

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.name}`} className={styles.item}>
            <img className={styles.avatar} src={data.avatarUrl} alt={data.name} />
            <div>
                <div className={styles.userTitleWrapper}>
                    <h4 className={styles.name}>{data.name}</h4>
                    {data.tick && <TickIcon className={styles.tick} />}
                </div>
                <p className={styles.desc}>{data.desc}</p>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
