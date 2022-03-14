import PropTypes from 'prop-types';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { FormContainer, SignInButton } from './LoginForm.styles';

// import { LoginInput } from './LoginInput.styles';
import Input from '../Input';
import { useRouter } from 'next/router';
export default function LoginForm({ ...props }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const router = useRouter();

  const userLogin = async (e) => {
    e.preventDefault();
    setLoginError(false);

    const user = { email, password };
    const res = await signIn('credentials', { ...user, callbackUrl: '/', redirect: false });
    if (res?.error) {
      setLoginError(true);
    } else {
      setLoginError(false);
    }
    if (res.url) {
      router.push(res.url);
    }
  };

  return (
    <FormContainer {...props}>
      {loginError && <span style={{ color: 'red' }}>Invalid Credentials</span>}
      <Input
        id="email"
        type="text"
        value={email}
        onInputChange={(e) => setEmail(e.target.value)}
        label="Email"
      />
      <Input
        id="password"
        type="password"
        value={password}
        onInputChange={(e) => setPassword(e.target.value)}
        label="Password"
      />
      <SignInButton primary onClick={userLogin}>
        Sign In
      </SignInButton>
    </FormContainer>
  );
}

LoginForm.propTypes = {
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};
