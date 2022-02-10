import { LoginInput } from './loginInput';
import { useState } from 'react';
import styled from 'styled-components';

const LoginPageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  height: 100vh;
  background-image: url('../UserLoginBackgroundImg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Header = styled.div``;

const LayerWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: -1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  color: rgb(255, 255, 255);
  background-color: #000000;
  @media (min-width: 768px) {
    width: 24rem;
    height: 32rem;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const FormContainer = styled.div`
  margin-top: 5vh;
`;

const FormHeader = styled.h1`
  width: 17rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 17rem;
  height: 3rem;
  border-radius: 5px;
  border-color: #e50914;
  background-color: #e50914;
  color: #ffffff;
  @media (min-width: 768px) {
    width: 16rem;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 17rem;
  color: #ffffff;
  font-size: 0.8rem;
`;
const Checkbox = styled.input`
  opacity: 0.5;
`;

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
            <span style={{ marginLeft: '5rem' }}>Need help?</span>
          </CheckboxWrapper>
          <p style={{ color: '#5e5d5d', display: 'flex', fontWeight: '600' }}>
            New to Netflix?
            <a href="" style={{ color: '#ffffff', marginLeft: '3px' }}>
              {' '}
              Sign up now.
            </a>
          </p>
        </FormContainer>
      </Wrapper>
    </LoginPageContainer>
  );
}
