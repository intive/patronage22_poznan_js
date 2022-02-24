const emailPattern = /^[a-z\d]+[\w\d.-]*(\+[\w\d.-]*)?@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;

const validateSignUpFormInputs = (inputValues) => {
  let errorMsg = {};

  if ('email' in inputValues) {
    errorMsg.email = validateUserEmail(inputValues.email);
  }
  if ('password' in inputValues) {
    errorMsg.password = validateUserPassword(inputValues.password);
  }

  return errorMsg;
};

export default validateSignUpFormInputs;

export const validateUserEmail = (emailAdress) => {
  if (!emailAdress) {
    return 'Email adress is required';
  } else if (!emailPattern.test(emailAdress)) {
    return 'Please provide correct email adress';
  }

  return '';
};

export const validateUserPassword = (password) => {
  if (!password) {
    return 'Password is required';
  } else if (!passwordPattern.test(password)) {
    return 'Please provide password with at least one uppercase, digit and special sign, min. 8 and max. 20 characters long';
  }

  return '';
};
