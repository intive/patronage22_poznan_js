import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Button from 'components/UI/Button';
import Input from '../Input';
import { FormContainer } from '../Form.styles';
import { validateSignInForm } from 'utils/validateFormInputs';
import { ErrorIcon } from '../Input/Input.styles';
import { GeneralErrorMessage } from './SignInForm.styles';

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
    setLoginError(false);
    let validationErrors = validateSignInForm(inputValues);

    if (Object.values(validationErrors).length > 0) {
      setInputErrors(validationErrors);
    } else {
      setIsFormSubmitting(true);
      const user = inputValues;
      const res = await signIn('credentials', { ...user, callbackUrl: '/', redirect: false });
      authenticateUser(res);
      setIsFormSubmitting(false);
    }
  };

  const authenticateUser = (res) => {
    if (res?.error) {
      setLoginError(true);
      setInputValues(initialState);
    } else {
      setLoginError(false);
    }
    if (res.url) {
      router.push(res.url);
    }
  };

  return (
    <FormContainer>
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
      {loginError && (
        <GeneralErrorMessage>
          <ErrorIcon type="x-mark" style={{ paddingTop: '2px' }} />
          <span>Please enter correct login data.</span>
        </GeneralErrorMessage>
      )}
      <Button fullWidth primary isLoading={isFormSubmitting} onClick={userLogin}>
        Sign in
      </Button>
    </FormContainer>
  );
}
