import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { BsCameraVideo, BsCameraVideoFill } from 'react-icons/bs';
import { IoPeopleOutline, IoPeopleSharp } from 'react-icons/io5';
import List from '~/components/List';
import Button from '~/components/Button';
import config from '~/config';
import LinkItem from './components/LinkItem';
import styles from './Sidebar.module.scss';
import AccountItem from './components/AccountItem';
import DiscoverItem from './components/DiscoverItem';

const LINKS_LIST = [
    {
        title: 'For You',
        activeIcon: AiFillHome,
        icon: AiOutlineHome,
        to: config.routes.home,
    },
    {
        title: 'Following',
        activeIcon: IoPeopleSharp,
        icon: IoPeopleOutline,
        to: config.routes.following,
    },
    {
        title: 'LIVE',
        activeIcon: BsCameraVideoFill,
        icon: BsCameraVideo,
        to: config.routes.live,
    },
];

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.linkList}>
                {LINKS_LIST.map((link, index) => (
                    <li key={index}>
                        <LinkItem icon={link.icon} activeIcon={link.activeIcon} to={link.to}>
                            {link.title}
                        </LinkItem>
                    </li>
                ))}
            </ul>
            <div className={styles.wrapper}>
                <p className={styles.loginHint}>
                    Log in to follow creators, like videos, and view comments.
                </p>
                <Button variant="outlined" color="primary" className={styles.loginBtn}>
                    Log in
                </Button>
            </div>
            <div className={styles.wrapper}>
                <List
                    item={AccountItem}
                    label="Suggested accounts"
                    data={[
                        {
                            name: 'theanh28entertainment',
                            desc: 'Theanh28 Entertainment',
                            avatarUrl:
                                'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1663124400&x-signature=0cGwn5fwVU%2BQ77CYPTEAu3Mwy7w%3D',
                            tick: true,
                        },
                        {
                            name: 'theanh28entertainment',
                            desc: 'Theanh28 Entertainment',
                            avatarUrl:
                                'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1663124400&x-signature=0cGwn5fwVU%2BQ77CYPTEAu3Mwy7w%3D',
                            tick: true,
                        },
                        {
                            name: 'theanh28entertainment',
                            desc: 'Theanh28 Entertainment',
                            avatarUrl:
                                'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1663124400&x-signature=0cGwn5fwVU%2BQ77CYPTEAu3Mwy7w%3D',
                            tick: true,
                        },
                        {
                            name: 'theanh28entertainment',
                            desc: 'Theanh28 Entertainment',
                            avatarUrl:
                                'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1663124400&x-signature=0cGwn5fwVU%2BQ77CYPTEAu3Mwy7w%3D',
                            tick: true,
                        },
                        {
                            name: 'theanh28entertainment',
                            desc: 'Theanh28 Entertainment',
                            avatarUrl:
                                'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1663124400&x-signature=0cGwn5fwVU%2BQ77CYPTEAu3Mwy7w%3D',
                            tick: true,
                        },
                        {
                            name: 'theanh28entertainment',
                            desc: 'Theanh28 Entertainment',
                            avatarUrl:
                                'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1663124400&x-signature=0cGwn5fwVU%2BQ77CYPTEAu3Mwy7w%3D',
                            tick: true,
                        },
                        {
                            name: 'theanh28entertainment',
                            desc: 'Theanh28 Entertainment',
                            avatarUrl:
                                'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1663124400&x-signature=0cGwn5fwVU%2BQ77CYPTEAu3Mwy7w%3D',
                            tick: true,
                        },
                        {
                            name: 'theanh28entertainment',
                            desc: 'Theanh28 Entertainment',
                            avatarUrl:
                                'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1663124400&x-signature=0cGwn5fwVU%2BQ77CYPTEAu3Mwy7w%3D',
                            tick: true,
                        },
                        {
                            name: 'theanh28entertainment',
                            desc: 'Theanh28 Entertainment',
                            avatarUrl:
                                'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1663124400&x-signature=0cGwn5fwVU%2BQ77CYPTEAu3Mwy7w%3D',
                            tick: true,
                        },
                        {
                            name: 'theanh28entertainment',
                            desc: 'Theanh28 Entertainment',
                            avatarUrl:
                                'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1663124400&x-signature=0cGwn5fwVU%2BQ77CYPTEAu3Mwy7w%3D',
                            tick: true,
                        },
                    ]}
                />
            </div>
            <div className={styles.wrapper}>
                <List
                    item={DiscoverItem}
                    disabledShowAll
                    label="Discover"
                    data={[
                        { title: 'sansangthaydoi', type: 'tag' },
                        { title: 'mackedoi', type: 'tag' },
                        {
                            title: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n',
                            type: 'music',
                        },
                        {
                            title: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',
                            type: 'music',
                        },
                        { title: '7749hieuung', type: 'tag' },
                    ]}
                />
            </div>
            <p className={styles.copyright}>© {new Date().getFullYear()} TikTok</p>
        </div>
    );
}

export default Sidebar;
