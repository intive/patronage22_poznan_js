import { useState, useEffect } from 'react';
import validateSignUpFormInputs, { validateUserPassword } from 'utils/validate-form-inputs';
import { FormTitle, InputAndButtonWrapper } from '../CreateAccount.styles';
import FloatingLabelInput from '../FloatingLabelInput';
import Button from 'components/Button';
import Spinner from 'components/Miscellaneous/Spinner';

const initialState = { password: '', email: '' };

const UserSignUpForm = ({ emailValue }) => {
  const [inputValues, setInputValues] = useState({
    password: '',
    email: emailValue,
  });
  const [errorMsg, setErrorMsg] = useState(initialState);
  const [loading, setLoading] = useState(false);

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
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

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
        {!loading ? (
          <Button onClick={handleSubmit} primary fullWidth>
            Create account
          </Button>
        ) : (
          <Button onClick={handleSubmit} primary fullWidth disabled loader>
            <Spinner />
          </Button>
        )}
      </InputAndButtonWrapper>
    </form>
  );
};

export default UserSignUpForm;
