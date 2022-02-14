import {
  LoginPageContainer,
  Header,
  LayerWrapper,
  Wrapper,
  FormContainer,
  FormHeader,
  InputWrapper,
  Button,
  CheckboxWrapper,
  Checkbox,
} from './loginStyle';
import { LoginInput } from './loginInput';
import { useState } from 'react';

export default function UserLogin() {
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
      <Header></Header>
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
            <span style={{ marginLeft: '5rem', cursor: 'pointer' }}>Need help?</span>
          </CheckboxWrapper>
          <p style={{ color: '#5e5d5d', display: 'flex', fontWeight: '600' }}>
            New to Netflix?
            <a href="" style={{ color: '#ffffff', marginLeft: '3px' }}>
              Sign up now.
            </a>
          </p>
        </FormContainer>
      </Wrapper>
    </LoginPageContainer>
  );
}
