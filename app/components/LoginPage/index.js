import { useState } from 'react';

import {
  LoginPageContainer,
  FormContainer,
  FormHeader,
  CheckboxWrapper,
  SignUpLinkParagraph,
  SignUpLink,
  CheckboxContainer,
  SignInButton,
} from './styles';
import { LoginInput } from './LoginInputStyles';

export function LoginPage() {
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
    <LoginPageContainer>
      <FormContainer>
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
    </LoginPageContainer>
  );
}
