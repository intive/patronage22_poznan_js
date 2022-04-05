import { SessionProvider } from 'next-auth/react';
import '../styles/fonts.css';
import '../styles/globals.css';

import Layout from 'components/Layout';
import AppContext from 'context/app';
import { useActions } from 'actions/app';
import Modal from 'components/Modal';

function MyApp({ Component, pageProps }) {
  const { pageLayout, session } = pageProps;
  const appState = useActions({ isModalOpen: false, content: '' });
  const { content, isModalOpen } = appState;
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
