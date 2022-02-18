import { FormFlex, Input } from 'components/Form';
import Button from 'components/Button';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 50%;
  margin: 50px auto;
  background-color: ${(props) => (props.theme === 'light' ? '#fff' : '#666')};
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
    <Wrapper theme={'light'}>
      <FormFlex>
        <Input
          id="username"
          type="text"
          label="Username"
          value={username}
          error={usernameError}
          onInputChange={(e) => setUsername(e.target.value)}
        />
        <Input
          id="password"
          type="password"
          label="Password"
          value={password}
          onInputChange={(e) => setPassword(e.target.value)}
        />
        <Button primary onClick={userLogin}>
          Sign In
        </Button>
      </FormFlex>
    </Wrapper>
  );
}
