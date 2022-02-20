import Footer from '../Footer';
import Header from '../Header';
import Button from '../Button/Button.styles';
import SimpleHeader from 'components/SimpleHeader';

import { useActions, logIn, logOut } from 'actions';

export default function Layout({ children }) {
  const user = useActions();
  return (
    <>
      {user ? <Header /> : <SimpleHeader></SimpleHeader>}
      <div style={{ position: 'absolute', bottom: '0', right: '0' }}>
        <Button primary value="Sign In" onClick={() => logIn({ username: 'Grażyna' })}>
          Sign In
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
