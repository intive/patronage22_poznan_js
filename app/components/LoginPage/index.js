import { useState } from 'react';
import {
  LoginPageContainer,
  FormContainer,
  FormHeader,
  Button,
  CheckboxWrapper,
  SignUpLinkParagraph,
  SignUpLink,
  CheckboxContainer,
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
          label="Username"
          placeholder="Email or phone number"
          value={username}
          error={usernameError}
          onInputChange={(e) => setUsername(e.target.value)}
        />
        <LoginInput
          id="password"
          type="password"
          label="Password"
          placeholder="Password"
          value={password}
          onInputChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={userLogin}>Sign In</Button>
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
