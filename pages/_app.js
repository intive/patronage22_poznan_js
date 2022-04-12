import { SessionProvider } from 'next-auth/react';
import '../styles/fonts.css';
import '../styles/globals.css';
import Layout from 'components/Layout';
import AppContext from 'context/app';
import { useActions } from 'actions/app';
import Modal from 'components/Modal';
import { setMoviesInMyList } from 'actions/app';

function MyApp({ Component, pageProps }) {
  const { pageLayout, session, myList } = pageProps;

  const appState = useActions({
    isModalOpen: false,
    content: '',
    ...(myList && { myList: myListToHashMap() }),
  });

  const { content, isModalOpen } = appState;

  if (myList && !appState.myList) {
    setMoviesInMyList(myListToHashMap());
  }

  function myListToHashMap() {
    return myList.reduce((acc, cur) => ({ ...acc, [cur.id]: true }), {});
  }

  return (
    <SessionProvider session={session}>
      <AppContext.Provider value={appState}>
        {isModalOpen && <Modal content={content} />}
        <Layout pageLayout={pageLayout}>
          <Component {...pageProps} />
        </Layout>
      </AppContext.Provider>
    </SessionProvider>
  );
}

export default MyApp;
