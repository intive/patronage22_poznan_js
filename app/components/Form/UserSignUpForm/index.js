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
import { ServersideMessage } from '../Form.styles';
import { fetchWrapper } from 'utils/fetchWrapper';
import Icon from 'components/UI/Icon';

const initialState = { email: '', password: '', username: '' };
Object.freeze(initialState);

const UserSignUpForm = () => {
  const [inputValues, setInputValues] = useState(initialState);
  const [inputErrors, setInputErrors] = useState({});
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [registerError, setRegisterError] = useState(null);

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
    const response = await fetchWrapper.post('api/users/signup', inputValues);
    handleServerResponse(response);
  };

  const handleServerResponse = (response) => {
    if (response?.error) {
      setRegisterError(response.error);
      setInputValues(initialState);
      return;
    }

    const { status } = response;
    if (status === 409) {
      setRegisterError('Email address already in use. Try signing in instead.');
      return;
    }
    if (status === 201) {
      setRegisterError('');
      return;
    }
    setRegisterError("Something went wrong and it's not your fault. Please come back to us later.");
  };

  const validateInputs = () => {
    const errorMessages = validateSignUpFormInputs(inputValues);
    const isError = Object.values(errorMessages).some((errorMessage) => Boolean(errorMessage));
    setInputErrors(isError ? errorMessages : {});
    return !isError;
  };

  useEffect(() => {
    console.log('dupa');
    if (isFormSubmitting) {
      console.log('effecto');
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
      {!isFormSubmitting &&
        registerError !== null &&
        (registerError ? (
          <ServersideMessage error>
            <Icon type="x-mark" style={{ padding: '0 5px' }} />
            {registerError}
          </ServersideMessage>
        ) : (
          <ServersideMessage>
            <Icon type="check-mark" style={{ padding: '0 5px' }} />
            {'Success! Now you can '}
            <Link href="/sign-in" passHref>
              <StyledLink>sign in</StyledLink>
            </Link>
          </ServersideMessage>
        ))}
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
