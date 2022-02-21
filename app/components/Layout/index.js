import Footer from '../Footer';
import Header from '../Header';
import Button from '../Button/Button.styles';
import SimpleHeader from 'components/SimpleHeader';

import { useActions, logIn, logOut } from 'actions/user';

export default function Layout({ children, pageLayout = {} }) {
  const user = useActions({});
  const isHeaderVisible = pageLayout.header !== false;
  const isFooterVisible = pageLayout.footer !== false;
  return (
    <>
      {isHeaderVisible && (
        <>
          {user.username ? <Header /> : <SimpleHeader mode={pageLayout.header}></SimpleHeader>}
          {/* It's only a temporary solution for development purposes */}
          <div style={{ position: 'absolute', bottom: '0', right: '0' }}>
            <Button primary value="Log In" onClick={() => logIn({ username: 'Grażyna' })}>
              Log In
            </Button>
            <Button primary value="Log Out" onClick={() => logOut()}>
              Log Out
            </Button>
          </div>
        </>
      )}
      {children}
      {isFooterVisible && <Footer />}
    </>
  );
}
