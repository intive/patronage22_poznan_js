import Footer from '../Footer';
import Header from '../Header';
import { PrimaryButton } from '../Button';
import SimpleHeader from 'components/SimpleHeader';

import { logIn, logOut, useActions } from 'actions';

export default function Layout({ children }) {
  const user = useActions({});
  return (
    <>
      {user ? <Header /> : <SimpleHeader></SimpleHeader>}
      <div style={{ position: 'absolute', bottom: '0', right: '0' }}>
        <PrimaryButton value="Sign In" onClick={() => logIn({ username: 'Grażyna' })}>
          Sign In
        </PrimaryButton>
        <PrimaryButton value="Sign Up" onClick={logOut}>
          Sign Up
        </PrimaryButton>
      </div>
      {children}
      <Footer />
    </>
  );
}
