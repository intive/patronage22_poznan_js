const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordPattern = /^(?!.*[\s])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const validateSignUpFormInputs = (inputValues) => {
  let errorMsg = {};

  if ('email' in inputValues) {
    errorMsg.email = validateUserEmail(inputValues.email);
  }
  if ('name' in inputValues) {
    errorMsg.name = validateUserName(inputValues.name);
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

export const validateUserName = (name) => {
  if (!name) {
    return 'Name is required';
  }

  return '';
};

export const validateUserPassword = (password) => {
  if (!password) {
    return 'Password is required';
  } else if (!passwordPattern.test(password)) {
    return 'Please provide password with at least one uppercase, digit and special sign, min. 8 characters long';
  }

  return '';
};
