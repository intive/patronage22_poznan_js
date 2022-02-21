import Layout from 'components/Layout';
import '../styles/fonts.css';
import '../styles/globals.css';
import { useState } from 'react';
import AppContext from 'context/app';

function MyApp({ Component, pageProps }) {
  const { pageLayout } = pageProps;
  const [appState] = useState({});
  return (
    <AppContext.Provider value={appState}>
      <Layout pageLayout={pageLayout}>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
