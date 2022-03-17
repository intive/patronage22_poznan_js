import { useState, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Button from 'components/UI/Button';
import Input from '../Input';
import { FormContainer } from '../Form.styles';
import { validateSignInForm } from 'utils/validateFormInputs';

const initialState = Object.freeze({ email: '', password: '' });

export default function SignInForm() {
  const [inputValues, setInputValues] = useState(initialState);
  const [inputErrors, setInputErrors] = useState({});
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const router = useRouter();

  const userLogin = async (e) => {
    e.preventDefault();
    setInputErrors({});
    setIsFormSubmitting(true);
    setLoginError(false);
    let validationErrors = validateSignInForm(inputValues);

    if (Object.values(validationErrors).length > 0) {
      setInputErrors(validationErrors);
    } else {
      const user = inputValues;
      // It's only temporary console.log:
      console.log(user);
      const res = await signIn('credentials', { ...user, callbackUrl: '/', redirect: false });
      if (res?.error) {
        setLoginError(true);
      } else {
        setLoginError(false);
      }
      if (res.url) {
        router.push(res.url);
      }
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => setIsFormSubmitting(false), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [isFormSubmitting]);

  return (
    <FormContainer>
      {loginError && <span style={{ color: 'red' }}>Invalid Credentials</span>}
      <Input
        id="email"
        type="email"
        value={inputValues.email}
        error={inputErrors.email}
        onInputChange={(e) => {
          setInputValues({ ...inputValues, email: e.target.value });
        }}
        label="Email"
      />
      <Input
        id="password"
        type="password"
        value={inputValues.password}
        onInputChange={(e) => setInputValues({ ...inputValues, password: e.target.value })}
        label="Password"
        error={inputErrors.password}
      />
      <Button fullWidth primary isLoading={isFormSubmitting} onClick={userLogin}>
        Sign in
      </Button>
    </FormContainer>
  );
}
