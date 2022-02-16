import Footer from '../Footer';
import Header from '../Header';
import React from 'react';
import { useContext } from 'react';
import SimpleHeader from 'components/SimpleHeader';
import AppContext from 'context/app';

export default function Layout({ children }) {
  const { user, headerMode } = useContext(AppContext);
  return (
    <>
      {user ? <Header /> : <SimpleHeader headerMode={headerMode}></SimpleHeader>}
      {children}
      <Footer />
    </>
  );
}
