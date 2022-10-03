import VideoItem from './components/VideoItem';
import styles from './Home.module.scss';

function HomePage() {
    return (
        <div className={styles.content}>
            <VideoItem />
        </div>
    );
}

export default HomePage;
