const emailSignUpPattern =
  /^[a-z\d]+[\w\d.-]*(\+[\w\d.-]*)?@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
const nameSignUpPattern = /^[A-Za-z0-9]*$/;
const passwordSignUpPattern = /^\S{6,}$/;

const validateSignUpFormInputs = (inputValues) => {
  let errorMsg = {};

  if ('email' in inputValues) {
    errorMsg.email = validateSignUpUserEmail(inputValues.email);
  }
  if ('name' in inputValues) {
    errorMsg.name = validateSignUpUserName(inputValues.name);
  }
  if ('password' in inputValues) {
    errorMsg.password = validateSignUpUserPassword(inputValues.password);
  }

  return errorMsg;
};

export default validateSignUpFormInputs;

export const validateSignUpUserEmail = (emailAdress) => {
  if (!emailAdress) {
    return 'Email adress is required';
  } else if (!emailSignUpPattern.test(emailAdress)) {
    return 'Please provide correct email adress';
  }

  return '';
};

export const validateSignUpUserName = (name) => {
  if (!name) {
    return 'Name is required';
  } else if (!nameSignUpPattern.test(name)) {
    return 'Name needs to contain letters and digits only';
  }

  return '';
};

export const validateSignUpUserPassword = (password) => {
  if (!password) {
    return 'Password is required';
  } else if (!passwordSignUpPattern.test(password)) {
    return 'Please provide one word min. 6 characters long';
  }

  return '';
};
