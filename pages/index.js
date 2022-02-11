import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Modal } from 'components/Modal';
import { Button } from 'components/SuperButton';
import { useActions } from 'actions/app';

const initialState = {
  isModalOpen: false,
  modalContent: '',
};

export default function Home() {
  const appState = useActions(initialState);

  return (
    <div className={styles.container}>
      {appState.isModalOpen && <Modal content={appState.modalContent} />}
      <Head>
        <title>inTiVi 2022</title>
        <meta name="description" content="inTiVi 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to inTiVi</h1>

        <p className={styles.description}>
          Please <Link href={'/user/login'}>sign in</Link>.
        </p>
        <br />
        <Button />
      </main>

      <footer className={styles.footer}>(c) intive 2022</footer>
    </div>
  );
}
