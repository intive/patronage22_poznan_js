import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  FormContainer,
  FormHeader,
  CheckboxWrapper,
  SignUpLinkParagraph,
  SignUpLink,
  CheckboxContainer,
  SignInButton,
} from './LoginForm.styles';

import { LoginInput } from './LoginInput.styles';

export default function LoginForm({ ...props }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const userLogin = async (e) => {
    e.preventDefault();
    setUsernameError('');
    if (!username || username.length < 5) {
      setUsernameError('Invalid username');
    }

    const user = { username, password };
    console.log(user);
  };
  return (
    <FormContainer {...props}>
      <FormHeader>Sign In</FormHeader>
      <LoginInput
        id="username"
        type="text"
        placeholder="Email or phone number"
        value={username}
        error={usernameError}
        onInputChange={(e) => setUsername(e.target.value)}
      />
      <LoginInput
        id="password"
        type="password"
        placeholder="Password"
        value={password}
        onInputChange={(e) => setPassword(e.target.value)}
      />
      <SignInButton primary onClick={userLogin}>
        Sign In
      </SignInButton>
      <CheckboxWrapper>
        <CheckboxContainer>
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe">Remember me</label>
        </CheckboxContainer>
        <span>Need help?</span>
      </CheckboxWrapper>
      <SignUpLinkParagraph>
        New to INTIVI?
        <SignUpLink href="/create-account">Sign up now.</SignUpLink>
      </SignUpLinkParagraph>
    </FormContainer>
  );
}

LoginForm.propTypes = {
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};
