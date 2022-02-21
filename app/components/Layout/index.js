import Footer from '../Footer';
import Header from '../Header';
import Button from '../Button/Button.styles';
import SimpleHeader from 'components/SimpleHeader';

import { useActions, logIn, logOut } from 'actions/user';

export default function Layout({ children }) {
  const user = useActions({});
  return (
    <>
      {/* It's only a temporary solution for development purposes */}
      {user.username ? <Header /> : <SimpleHeader></SimpleHeader>}
      <div style={{ position: 'absolute', bottom: '0', right: '0' }}>
        <Button primary value="Log In" onClick={() => logIn({ username: 'Grażyna' })}>
          Log In
        </Button>
        <Button primary value="Log Out" onClick={() => logOut()}>
          Log Out
        </Button>
      </div>
      {children}
      <Footer />
    </>
  );
}
