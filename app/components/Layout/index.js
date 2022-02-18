import Footer from '../Footer';
import Header from '../Header';
import { useContext } from 'react';
import SimpleHeader from 'components/SimpleHeader';
import AppContext from 'context/app';

export default function Layout({ children }) {
  const { user } = useContext(AppContext);
  return (
    <>
      {user ? <Header /> : <SimpleHeader></SimpleHeader>}
      {children}
      <Footer />
    </>
  );
}
