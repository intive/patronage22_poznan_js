import Layout from 'components/Layout';
import '../styles/fonts.css';
import '../styles/globals.css';
import { useState } from 'react';
import AppContext from 'context/app';

function MyApp({ Component, pageProps }) {
  const { headerMode } = pageProps;
  const [appState] = useState({ headerMode });

  return (
    <AppContext.Provider value={appState}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
