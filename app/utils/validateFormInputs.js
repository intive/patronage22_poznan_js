const emailPattern = /^[a-z\d]+[\w\d.-]*(\+[\w\d.-]*)?@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
const namePattern = /^[A-Za-z0-9]*$/;
const passwordPattern = /^\S{6,}$/;

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
  } else if (!namePattern.test(name)) {
    return 'Name needs to contain letters and digits only';
  }

  return '';
};

export const validateUserPassword = (password) => {
  if (!password) {
    return 'Password is required';
  } else if (!passwordPattern.test(password)) {
    return 'Please provide one word min. 6 characters long';
  }

  return '';
};
