import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { validateUserEmail } from 'utils/validate-form-inputs';
import { FormTitle, InputAndButtonWrapper } from '../CreateAccount.styles';
import FloatingLabelInput from '../FloatingLabelInput';
import Button from 'components/Button';

//TODO: this is only for test purpose; to remove after API is provided
const doesUserExist = () => {
  const randomBoolean = Math.random() < 0.5;
  return randomBoolean;
};
//

const UserPrevetForm = ({ onEmailVerified }) => {
  const [emailInputValue, setEmailInputValue] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setEmailInputValue(inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errorMessage = validateUserEmail(emailInputValue);

    if (errorMessage) {
      setErrorMsg(errorMessage);
    } else {
      doesUserExist()
        ? setErrorMsg('This email adress is already taken, please provide another one or sign in')
        : onEmailVerified(emailInputValue);
    }
  };

  return (
    <form>
      <FormTitle>Ready to watch? Enter your email to create account.</FormTitle>
      <InputAndButtonWrapper flexColumnMobileOnly>
        <FloatingLabelInput
          name="email"
          type="email"
          label="Email adress"
          value={emailInputValue}
          errorMsg={errorMsg}
          onInputChange={handleInputChange}
        />
        <Button primary appended onClick={handleSubmit}>
          Get started
          <FontAwesomeIcon style={{ marginLeft: '.6rem' }} icon={faChevronRight} />
        </Button>
      </InputAndButtonWrapper>
    </form>
  );
};

export default UserPrevetForm;
