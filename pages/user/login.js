import { LoginInput } from './loginInput';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    margin-left: 35vw;
    margin-top: 7vh;
    width: 30vw;
    height: 86vh;
    color: rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0.8);
`;

const LoginPageContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: url('../UserLoginBackgroundImg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
    z-index: -2;
`;

const Header = styled.div`
   padding-left: 3vw;
   padding-top: 1.5vh;
   z-index: 3;
`;

const LayerWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index:-1;
`;

const FormContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 5vh;
    width: 20vw;
    height: 76vh;

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
  }

  return (
    <LoginPageContainer>
      <LayerWrapper></LayerWrapper>
      <Header>
        {/* <img src='../logo-intivi.svg'></img> */}
      </Header>
      <Wrapper>
        <FormContainer>
          <h1 style={{ fontWeight: "600", marginBottom: "3vh", marginLeft: "0.5vw" }}>Sign In</h1>

          <LoginInput
            id="username"
            name="username"
            type="text"
            label="Username"
            placeholder="Email or phone number"
            value={username}
            error={usernameError}
            onInputChange={(e) => setUsername(e.target.value)} />

          <LoginInput
            id="password"
            name="password"
            type="password"
            label="Password"
            placeholder="Password"
            value={password}
            onInputChange={(e) => setPassword(e.target.value)} />
          <button onClick={userLogin}>Sign In</button>
        </FormContainer>
      </Wrapper>
    </LoginPageContainer>
  )
}
