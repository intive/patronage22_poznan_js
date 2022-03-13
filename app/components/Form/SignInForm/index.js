import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'components/UI/Button';
import Input from '../Input';
import { FormContainer } from './SignInForm.styles';

export default function SignInForm({ ...props }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const userLogin = async (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    if (!email || !password) {
      if (!email) {
        setEmailError('Please enter your email.');
      }
      if (!password) {
        setPasswordError('Please enter your password.');
      }
    } else {
      const user = { email, password };
      console.log(user);
    }
  };

  return (
    <FormContainer {...props}>
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
      <Button style={{ width: '100%' }} primary onClick={userLogin}>
        Sign in
      </Button>
    </FormContainer>
  );
}

SignInForm.propTypes = {
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};
