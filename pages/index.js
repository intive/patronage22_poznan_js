import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to inTiVi</h1>
        <p className={styles.description}>
          Please <Link href={'/movieHero/video-section'}>Movie Hero CLICK HERE!</Link>.
        </p>
      </main>
    </div>
  );
}
