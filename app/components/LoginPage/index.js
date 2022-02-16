import { useState } from 'react';
import {
  LoginPageContainer,
  LayerWrapper,
  Wrapper,
  FormContainer,
  FormHeader,
  InputWrapper,
  Button,
  CheckboxWrapper,
  Checkbox,
  HelpSpan,
  SignUpLinkParagraph,
  SignUpLink,
} from './styles';
import { LoginInput } from './LoginInput';

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
      <LayerWrapper></LayerWrapper>
      <Wrapper>
        <FormContainer>
          <FormHeader>Sign In</FormHeader>
          <InputWrapper>
            <LoginInput
              id="username"
              name="username"
              type="text"
              label="Username"
              placeholder="Email or phone number"
              value={username}
              error={usernameError}
              onInputChange={(e) => setUsername(e.target.value)}
            />
            <LoginInput
              id="password"
              name="password"
              type="password"
              label="Password"
              placeholder="Password"
              value={password}
              onInputChange={(e) => setPassword(e.target.value)}
            />
          </InputWrapper>
          <Button onClick={userLogin}>Sign In</Button>
          <CheckboxWrapper>
            <Checkbox type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
            <HelpSpan>Need help?</HelpSpan>
          </CheckboxWrapper>
          <SignUpLinkParagraph>
            New to Netflix?
            <SignUpLink href="/create-account">Sign up now.</SignUpLink>
          </SignUpLinkParagraph>
        </FormContainer>
      </Wrapper>
    </LoginPageContainer>
  );
}
