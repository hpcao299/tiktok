import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './List.module.scss';

function AccountsList({ label, data, disabledShowAll = false, item }) {
    const [showAll, setShowAll] = useState(false);
    const [accountsList, setAccountsList] = useState(data.slice(0, 5));
    const Item = item;

    useEffect(() => {
        if (showAll) {
            setAccountsList(data);
        } else {
            setAccountsList(data.slice(0, 5));
        }
    }, [data, showAll]);

    const toggleShowALl = () => {
        setShowAll(!showAll);
    };

    return (
        <div>
            {label && <p className={styles.label}>{label}</p>}
            <div className={styles.list}>
                {accountsList.map((item, index) => (
                    <Item key={index} data={item} />
                ))}
            </div>
            {!disabledShowAll && (
                <div className={styles.showMoreText} onClick={toggleShowALl}>
                    {showAll ? 'See less' : 'See all'}
                </div>
            )}
        </div>
    );
}

AccountsList.propTypes = {
    disabledShowAll: PropTypes.bool,
    label: PropTypes.string,
    data: PropTypes.array.isRequired,
    item: PropTypes.elementType.isRequired,
};

export default AccountsList;
