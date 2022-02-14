import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to inTiVi</h1>
        <p className={styles.description}>
          Please <Link href={'/user/login'}>sign in</Link>.
        </p>
      </main>
    </div>
  );
}
