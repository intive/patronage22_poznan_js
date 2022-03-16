import { useState } from 'react';
import Button from 'components/UI/Button';
import Input from '../Input';
import { FormContainer } from '../Form.styles';
import { validateSignInForm } from 'utils/validateFormInputs';

const initialState = { email: '', password: '' };
Object.freeze(initialState);
export default function SignInForm() {
  const [inputValues, setInputValues] = useState(initialState);
  const [inputErrors, setInputErrors] = useState({});

  const userLogin = async (e) => {
    e.preventDefault();
    setInputErrors({});
    let validationErrors = validateSignInForm(inputValues);
    if (Object.values(validationErrors).length > 0) {
      setInputErrors(validationErrors);
    } else {
      const user = inputValues;
      // It's only temporary console.log:
      console.log(user);
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
      <Button fullWidth primary onClick={userLogin}>
        Sign in
      </Button>
    </FormContainer>
  );
}
