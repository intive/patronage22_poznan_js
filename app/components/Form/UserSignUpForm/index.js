import { useState, useEffect } from 'react';
import validateSignUpFormInputs, {
  validateUserEmail,
  validateUserPassword,
  validateUserName,
} from 'utils/validateFormInputs';
import Input from '../Input';
import Button from 'components/UI/Button';

const initialState = { email: '', password: '', name: '' };

const UserSignUpForm = () => {
  const [inputValues, setInputValues] = useState(initialState);
  const [errorMsg, setErrorMsg] = useState(initialState);
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
    setErrorMsg({ ...errorMsg, [name]: error });
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsFormSubmitting(false), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [isFormSubmitting]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const isError = checkForErrors();
    if (!isError) {
      handleFormData();
    }
  };

  const checkForErrors = () => {
    const errorMessages = validateSignUpFormInputs(inputValues);
    const isError = Object.values(errorMessages).some((input) => input !== '');
    isError ? setErrorMsg(errorMessages) : setErrorMsg(initialState);
    return isError;
  };

  const handleFormData = async () => {
    setIsFormSubmitting(true);
    // try {
    //   const response = await fetch('/api/user', {
    //     method: 'POST',
    //     body: JSON.stringify(inputValues),
    //   });
    //   if (response.status !== 200) {
    //     throw new Error(`Request failed: ${response.status}`);
    //   }
    // } catch (error) {
    //   console.log(`Registration failed! ${error.message}`);
    // }
  };

  return (
    <form>
      <Input
        id="email"
        type="email"
        label="Email adress"
        value={inputValues.email}
        error={errorMsg.email}
        onInputChange={handleInputChange}
        onBlur={(e) => handleBlur(e, validateUserEmail)}
      />
      <Input
        id="name"
        type="text"
        label="Name"
        value={inputValues.name}
        error={errorMsg.name}
        onInputChange={handleInputChange}
        onBlur={(e) => handleBlur(e, validateUserName)}
      />
      <Input
        id="password"
        type="password"
        label="Password"
        value={inputValues.password}
        error={errorMsg.password}
        onInputChange={handleInputChange}
        onBlur={(e) => handleBlur(e, validateUserPassword)}
      />
      <Button
        isLoading={isFormSubmitting}
        disabled={isFormSubmitting}
        primary
        fullWidth
        onClick={handleSubmit}
      >
        Sign up
      </Button>
    </form>
  );
};

export default UserSignUpForm;
