import { FormFlex, Button, Wrapper, HeaderStyle} from 'components/Form/styleComponents';
import { Input } from 'components/Form/index';
import { useState } from 'react';

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

   if (!registerPassword) {
      isErrorOccured = true;
      setRegisterPasswordError('Enter your password.')
    } else if (registerPassword.length < 6) {
      isErrorOccured = true;
      setRegisterPasswordError('Password is too short.');
    }
    if (!confirmEmail) {
      isErrorOccured = true;
      setConfirmEmailError('You need to confirm your email.');
    } else if (confirmEmail != email) {
      isErrorOccured = true;
      setConfirmEmailError('Invalid confirm email.');
    }
     if (!registerUsername) {
      isErrorOccured = true;
      setRegisterUsernameError('Enter your username.');
    } else if (!usernameRegEx.test(registerUsername)) {
      isErrorOccured = true;
      setRegisterUsernameError('Invalid username format.');
    } else if (registerUsername.length<6) {
      isErrorOccured = true;
      setRegisterUsernameError('Username is too short.');
    } else if (registerUsername.length >20) {
      isErrorOccured = true;
      setRegisterUsernameError('Username is to long.');
    }
    if (!email) {
      isErrorOccured = true;
      setEmailError('Enter your email.');
    } else if (!emailRegEx.test(email)) {
      isErrorOccured = true;
      setEmailError('Invalid e-mail address format.');
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
      <HeaderStyle>Sign up</HeaderStyle>
        <Input
          name="registerUsername"
          type="text"
          label="Username:"
          value={registerUsername}
          error={registerUsernameError}
          onInputChange={(e) => setRegisterUsername(e.target.value)} />
      <Input
        name="registerPassword"
        type="password"
        label="Password:"
        value={registerPassword}
        error={registerPasswordError}
        onInputChange={(e) => setRegisterPassword(e.target.value)} />
      <Input
        name="email"
        type="email"
        label="Email:"
        value={email}
        error={emailError}
        onInputChange={(e) => setEmail(e.target.value)} />
      <Input
        name="confirmEmail"
        type="email"
        label="Confirm Email:"
        value={confirmEmail}
        error={confirmEmailError}
        onInputChange={(e) => setConfirmEmail(e.target.value)} />
      <Button onClick={userRegister}>Sign Up</Button>
      </FormFlex>
    </Wrapper>
  )
}
