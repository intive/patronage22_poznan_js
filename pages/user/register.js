import { FormFlex, Input, Button } from 'components/Form';
import { useState } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    width: 50%;
    margin: 50px auto;
    background-color: ${(props) => props.theme === 'light' ? '#fff' : '#666'};
`;
const usernameRegEx = /^[a-zA-Z0-9_-]*$/;
const emailRegEx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

export default function UserRegister() {

  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerUsernameError, setRegisterUsernameError] = useState('');
  const [registerPasswordError, setRegisterPasswordError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [confirmEmailError, setConfirmEmailError] = useState('');

  const userRegister = async (e) => {

    e.preventDefault();
    setRegisterUsernameError('');
    setRegisterPasswordError('');
    setEmailError('');
    setConfirmEmailError('');
    let isErrorOccured = false;

    if (!registerUsername || registerUsername.length < 5) {
      isErrorOccured = true;
        setRegisterUsernameError('Invalid username');
    } if (!registerPassword || registerPassword.length < 6) {
      isErrorOccured = true;
      setRegisterPasswordError('Password should be at least 6 characters long');
    } if (confirmEmail != email) {
      isErrorOccured = true;
      setConfirmEmailError('Confirm email should be the same as email');
    } if (!usernameRegEx.test(registerUsername) || registerUsername.length<6 || registerUsername.length >20) {
      isErrorOccured = true;
      setRegisterUsernameError('Username must be between 6 and 20 characters long and can only contain letters and numbers');
    } if (!emailRegEx.test(email)) {
      isErrorOccured = true;
      setEmailError('The email must be in a valid email address format');
    }

    if(!isErrorOccured){
      const userData = {
        username: registerUsername,
        email: email,
        password: registerPassword
      };
      console.log(userData);
    }


}

  return (
    <Wrapper theme={"light"}>
      <FormFlex>
        <Input
          id="registerUsername"
          name="registerUsername"
          type="text"
          label="Username"
          value={registerUsername}
          error={registerUsernameError}
          onInputChange={(e) => setRegisterUsername(e.target.value)} />
      <Input
        name="registerPassword"
        type="password"
        label="Password"
        value={registerPassword}
        error={registerPasswordError}
        onInputChange={(e) => setRegisterPassword(e.target.value)} />
      <Input
        name="email"
        type="emaii"
        label="Email"
        value={email}
        error={emailError}
        onInputChange={(e) => setEmail(e.target.value)} />
      <Input
        name="confirmEmail"
        type="emaii"
        label="Confirm Email"
        value={confirmEmail}
        error={confirmEmailError}
        onInputChange={(e) => setConfirmEmail(e.target.value)} />
      <Button onClick={userRegister}>Sign Up</Button>
      </FormFlex>
    </Wrapper>
  )
}
