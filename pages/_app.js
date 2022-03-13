import Layout from 'components/Layout';
import '../styles/fonts.css';
import '../styles/globals.css';
import { useState } from 'react';
import AppContext from 'context/app';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  const { pageLayout, session } = pageProps;
  const [appState] = useState({});
  return (
    <SessionProvider session={session}>
      <AppContext.Provider value={appState}>
        <Layout pageLayout={pageLayout}>
          <Component {...pageProps} />
        </Layout>
      </AppContext.Provider>
    </SessionProvider>
  );
}

export default MyApp;
