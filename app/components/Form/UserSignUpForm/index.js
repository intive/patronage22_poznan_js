import { useState, useEffect } from 'react';
import Link from 'next/link';
import validateSignUpFormInputs, {
  validateSignUpUserEmail,
  validateSignUpUserPassword,
  validateSignUpUserName,
} from 'utils/validateFormInputs';
import { FormContainer } from '../Form.styles';
import Input from '../Input';
import { SignUpButton, StyledLink } from './UserSignUpForm.styles';
import ServerSideMessage from '../ServerSideMessage';
import { fetchWrapper } from 'utils/fetchWrapper';

const initialState = Object.freeze({ email: '', password: '', username: '' });

const endpoint = 'api/users/signup';
const generalErrorMessage =
  "Something went wrong and it's not your fault. Please come back to us later.";
const on409ErrorMessage = 'Email address already in use. Try signing in instead.';

const UserSignUpForm = () => {
  const [inputValues, setInputValues] = useState(initialState);
  const [inputErrors, setInputErrors] = useState({});
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [registerError, setRegisterError] = useState(null);

  const isSuccess = Boolean(!isFormSubmitting && registerError === '');
  const isError = Boolean(!isFormSubmitting && registerError);

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
    const response = await fetchWrapper.post(endpoint, inputValues);
    handleServerResponse(response);
  };

  const handleServerResponse = (response) => {
    if (response?.error) {
      setRegisterError(response.error);
      return;
    }

    const { status } = response;
    if (status === 409) {
      setRegisterError(on409ErrorMessage);
      return;
    }

    if (status === 201) {
      setRegisterError('');
      return;
    }

    setRegisterError(generalErrorMessage);
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
    <FormContainer hasError={isError} hasSuccess={isSuccess}>
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
      {isError && <ServerSideMessage hasError>{registerError}</ServerSideMessage>}
      {isSuccess && (
        <ServerSideMessage>
          {'Success! Now you can '}
          <Link href="/sign-in" passHref>
            <StyledLink>sign in</StyledLink>
          </Link>
        </ServerSideMessage>
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
