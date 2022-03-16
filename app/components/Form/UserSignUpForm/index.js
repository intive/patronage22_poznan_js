import { useState, useEffect } from 'react';
import validateSignUpFormInputs, {
  validateSignUpUserEmail,
  validateSignUpUserPassword,
  validateSignUpUserName,
} from 'utils/validateFormInputs';
import { FormContainer } from '../Form.styles';
import Input from '../Input';
import { SignUpButton } from './UserSignUpForm.styles';

const initialState = { email: '', password: '', name: '' };
Object.freeze(initialState);

const UserSignUpForm = () => {
  const [inputValues, setInputValues] = useState(initialState);
  const [inputErrors, setInputErrors] = useState({});
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const handleInputChange = (event) => {
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

    const isFormValid = validateInputs();
    if (isFormValid) {
      handleFormData();
    }
  };

  const validateInputs = () => {
    const errorMessages = validateSignUpFormInputs(inputValues);
    const isError = Object.values(errorMessages).some((errorMessage) => Boolean(errorMessage));
    setInputErrors(isError ? errorMessages : {});
    return !isError;
  };

  const handleFormData = async () => {
    setIsFormSubmitting(true);
    console.log('Form submitted');
    //TODO: send user data and handle response
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsFormSubmitting(false), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [isFormSubmitting]);

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
        id="name"
        type="text"
        label="Name"
        value={inputValues.name}
        error={inputErrors.name}
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
