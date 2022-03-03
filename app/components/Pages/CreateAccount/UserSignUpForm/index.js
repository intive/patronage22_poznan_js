import { useState, useEffect } from 'react';
import validateSignUpFormInputs, { validateUserPassword } from 'utils/validateFormInputs';
import { FormTitle, InputAndButtonWrapper } from '../CreateAccount.styles';
import FloatingLabelInput from '../FloatingLabelInput';
import Button from 'components/UI/Button';

const initialState = { password: '', email: '' };

const UserSignUpForm = ({ emailValue }) => {
  const [inputValues, setInputValues] = useState({
    password: '',
    email: emailValue,
  });
  const [errorMsg, setErrorMsg] = useState(initialState);
  const [isSubmitting, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const getErrorMessages = () => {
    if (emailValue !== inputValues.email) {
      return validateSignUpFormInputs(inputValues);
    } else {
      const passwordErrorMsg = validateUserPassword(inputValues.password);
      return { password: passwordErrorMsg, email: '' };
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [isSubmitting]);

  const handleFormData = () => {
    setLoading(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errorMessages = getErrorMessages();
    const isNoError = Object.values(errorMessages).every((input) => input === '');

    if (!isNoError) {
      setErrorMsg(errorMessages);
    } else {
      setErrorMsg(initialState);
      console.log('Form has been sent');
      handleFormData(inputValues);
    }
  };

  return (
    <form>
      <FormTitle>Please enter password to finish creating your account.</FormTitle>
      <InputAndButtonWrapper>
        <FloatingLabelInput
          name="email"
          type="email"
          label="Email adress"
          value={inputValues.email}
          errorMsg={errorMsg.email}
          onInputChange={handleInputChange}
          autoFocus
          withBorder
        />
        <FloatingLabelInput
          name="password"
          type="password"
          label="Password"
          value={inputValues.password}
          errorMsg={errorMsg.password}
          onInputChange={handleInputChange}
          withBorder
        />
        <Button primary fullWidth isLoading={isSubmitting} onClick={handleSubmit}>
          Create account
        </Button>
      </InputAndButtonWrapper>
    </form>
  );
};

export default UserSignUpForm;
