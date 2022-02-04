import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import '../pages/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRuler } from '@fortawesome/free-solid-svg-icons';
import { faYenSign } from '@fortawesome/free-solid-svg-icons';


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
          <FontAwesomeIcon icon={faRuler} />  
          <FontAwesomeIcon icon={faYenSign} />  

        </h1>
        <FontAwesomeIcon icon={faRuler} />  

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
