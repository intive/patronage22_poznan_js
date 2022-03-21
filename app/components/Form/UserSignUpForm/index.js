import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import validateSignUpFormInputs, {
  validateSignUpUserEmail,
  validateSignUpUserPassword,
  validateSignUpUserName,
} from 'utils/validateFormInputs';
import { signUpURL } from 'consts/urls';
import { FormContainer } from '../Form.styles';
import Input from '../Input';
import { SignUpButton, ServersideMessage, StyledLink } from './UserSignUpForm.styles';
import { fetchWrapper } from 'utils/fetchWrapper';

const initialState = { email: '', password: '', username: '' };
Object.freeze(initialState);

const UserSignUpForm = () => {
  const [inputValues, setInputValues] = useState(initialState);
  const [inputErrors, setInputErrors] = useState({});
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [registerError, setRegisterError] = useState(null);

  const router = useRouter();

  const handleInputChange = (event) => {
    setRegisterError(null);
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleBlur = (event, errorHandler) => {
    const { name } = event.target;
    const error = errorHandler(inputValues[name]);
    setInputErrors({ ...inputErrors, [name]: error });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setRegisterError(null);
    const isFormValid = validateInputs();
    if (isFormValid) {
      setIsFormSubmitting(true);
      signUp();
    }
  };

  const signUp = async () => {
    try {
      const response = await fetchWrapper.post(signUpURL, inputValues);
      handleServerResponse(response);
    } catch (error) {
      setRegisterError('Something went wrong');
    }
  };

  const handleServerResponse = (response) => {
    const { status } = response;
    if (status === 404) router.push('/404');
    if (status === 400 || status === 409) {
      response.json().then((data) => setRegisterError(data.error));
    }
    if (status === 201) setRegisterError('');
  };

  const validateInputs = () => {
    const errorMessages = validateSignUpFormInputs(inputValues);
    const isError = Object.values(errorMessages).some((errorMessage) => Boolean(errorMessage));
    setInputErrors(isError ? errorMessages : {});
    return !isError;
  };

  useEffect(() => {
    if (isFormSubmitting) {
      const timer = setTimeout(() => {
        if (registerError !== null) {
          setIsFormSubmitting(false);
        }
      }, 1500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isFormSubmitting, registerError]);

  return (
    <FormContainer>
      <Input
        id="email"
        type="email"
        label="Email adress"
        value={inputValues.email}
        error={inputErrors.email}
        onInputChange={handleInputChange}
        onBlur={(e) => handleBlur(e, validateSignUpUserEmail)}
      />
      <Input
        id="username"
        type="text"
        label="Name"
        value={inputValues.username}
        error={inputErrors.username}
        onInputChange={handleInputChange}
        onBlur={(e) => handleBlur(e, validateSignUpUserName)}
      />
      <Input
        id="password"
        type="password"
        label="Password"
        value={inputValues.password}
        error={inputErrors.password}
        onInputChange={handleInputChange}
        onBlur={(e) => handleBlur(e, validateSignUpUserPassword)}
      />
      {registerError && !isFormSubmitting && (
        <ServersideMessage error>{registerError}</ServersideMessage>
      )}
      {registerError === '' && !isFormSubmitting && (
        <ServersideMessage>
          {'Now you can '}
          <Link href="/sign-in" passHref>
            <StyledLink>sign in</StyledLink>
          </Link>
        </ServersideMessage>
      )}
      <SignUpButton
        isLoading={isFormSubmitting}
        disabled={isFormSubmitting}
        primary
        fullWidth
        onClick={handleSubmit}
      >
        Sign up
      </SignUpButton>
    </FormContainer>
  );
};

export default UserSignUpForm;
