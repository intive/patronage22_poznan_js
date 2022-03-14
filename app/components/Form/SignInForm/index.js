import { useState } from 'react';
import Button from 'components/UI/Button';
import Input from '../Input';
import { FormContainer } from './SignInForm.styles';

const emailPattern = /^[a-z\d]+[\w\d.-]*(\+[\w\d.-]*)?@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const userLogin = async (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    let isErrorOccured = false;

    if (!email) {
      isErrorOccured = true;
      setEmailError('Please enter your email.');
    } else if (!emailPattern.test(email)) {
      isErrorOccured = true;
      setEmailError('Invalid email format.');
    }

    if (!password) {
      isErrorOccured = true;
      setPasswordError('Please enter your password.');
    } else if (password.length < 5) {
      isErrorOccured = true;
      setPasswordError('Enter at least 5 characters.');
    }

    if (!isErrorOccured) {
      const user = { email, password };
      // It's only temporary console.log:
      console.log(user);
    }
  };

  return (
    <FormContainer>
      <Input
        id="email"
        type="email"
        value={email}
        error={emailError}
        onInputChange={(e) => setEmail(e.target.value)}
        label="Email"
      />
      <Input
        id="password"
        type="password"
        value={password}
        onInputChange={(e) => setPassword(e.target.value)}
        label="Password"
        error={passwordError}
      />
      <Button fullWidth primary onClick={userLogin}>
        Sign in
      </Button>
    </FormContainer>
  );
}
