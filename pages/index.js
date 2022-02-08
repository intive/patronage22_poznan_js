import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>inTiVi 2022</title>
        <meta name="description" content="inTiVi 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to inTiVi
        </h1>
        <h2>
          This is a Vercel test.
        </h2>

        <p className={styles.description}>
          Please <Link href={'/user/login'}>sign in</Link>.
        </p>
      </main>

      <footer className={styles.footer}>
        (c) intive 2022
      </footer>
    </div>
  )
}
