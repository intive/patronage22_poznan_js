import Footer from 'components/Footer';
import Header from 'components/Header';
import SimpleHeader from 'components/SimpleHeader';
import { useSession } from 'next-auth/react';

export default function Layout({ children, pageLayout = {} }) {
  const { data: session } = useSession();
  const isHeaderVisible = pageLayout.header !== false;
  const isFooterVisible = pageLayout.footer !== false;
  return (
    <>
      {isHeaderVisible && (
        <>{session ? <Header /> : <SimpleHeader mode={pageLayout.header}></SimpleHeader>}</>
      )}
      {children}
      {isFooterVisible && <Footer />}
    </>
  );
}
