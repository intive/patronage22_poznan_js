import { useState, useEffect } from 'react';
import validateSignUpFormInputs from 'utils/validateFormInputs';
import FloatingLabelInput from 'components/Pages/CreateAccount/FloatingLabelInput';
import Button from 'components/UI/Button';

const initialState = { email: '', password: '', name: '' };

const UserSignUpForm = () => {
  const [inputValues, setInputValues] = useState(initialState);
  const [errorMsg, setErrorMsg] = useState(initialState);
  const [isFormSubmitting, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [isFormSubmitting]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const isError = checkForErrors();
    if (!isError) handleFormData();
  };

  const checkForErrors = () => {
    const errorMessages = validateSignUpFormInputs(inputValues);
    const isError = Object.values(errorMessages).some((input) => input !== '');
    isError ? setErrorMsg(errorMessages) : setErrorMsg(initialState);
    return isError;
  };

  const handleFormData = async () => {
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify(inputValues),
      });
      if (response.status !== 200) {
        throw new Error(`Request failed: ${response.status}`);
      }
    } catch (error) {
      console.log(`Registration failed! ${error.message}`);
    }
  };

  return (
    <form>
      <FloatingLabelInput
        name="email"
        type="email"
        label="Email adress"
        value={inputValues.email}
        errorMsg={errorMsg.email}
        onInputChange={handleInputChange}
      />
      <FloatingLabelInput
        name="name"
        type="text"
        label="Name"
        value={inputValues.name}
        errorMsg={errorMsg.name}
        onInputChange={handleInputChange}
      />
      <FloatingLabelInput
        name="password"
        type="password"
        label="Password"
        value={inputValues.password}
        errorMsg={errorMsg.password}
        onInputChange={handleInputChange}
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
