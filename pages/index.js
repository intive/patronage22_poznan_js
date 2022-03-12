import Link from 'next/link';
import styles from '../styles/Home.module.css';

import { useActions, openModal, closeModal } from '../examples/actions/app';

export default function Home() {
  const state = useActions({ isModalOpen: false });
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to inTiVi</h1>
        <p className={styles.description}>
          Please <Link href={'/sign-in'}>sign in</Link>.
        </p>
        <p>
          isModalOpen: {`${state.isModalOpen}`} <br />
          <button onClick={() => openModal('Hi')}>action openModal</button>{' '}
          <button onClick={closeModal}>action closeModal</button>
        </p>
      </main>
    </div>
  );
}
