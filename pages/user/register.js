import { useState } from "react";
import {
  Input,
  Button,
  FormFlex,
  Wrapper,
  UserReg,
  PassReg,
  EmailReg,
} from "components/Form/index";

export default function UserRegister() {
  const inputProperty = {
    username: "username",
    password: "password",
    email: "email",
    confirmEmail: "confirmEmail",
    type: {
      email: "email",
      text: "text",
      password: "password",
    },
    label: {
      username: "User Name",
      password: "Your password",
      email: "Email address",
      confirmEmail: "Confirm your Email address",
    },
  };
  const initialState = {
    username: "",
    password: "",
    email: "",
    confirmEmail: "",
  };

  const initialErrors = {
    userError: "",
    passwordError: "",
    emailError: "",
    confirmEmailError: "",
  };

  const errMessage = {
    requiredField: "The field is required",
    minLengthUserInput: "Min 4 characters",
    minLengthPassInput: "Min 8 characters",
    maxLeghthInput: "Max 20 characters",
    incorrectEmail: "E-mail must contain ' @ '",
    strongPass:
      "Use strong password. You can use special character like a @ ! #",
    userFormChar: "use characters from [a-Z , 0-9]",
    emailEmailFormError: "Check your email!",
    comparisonEmailsError: "Email address must be the same!",
    noError: "",
  };

  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    inputValidationLive(value, name);
    setValues({
      ...values,
      [name]: value,
    });
  };
  const inputValidationLive = (inputValue, inputName) => {
    const {
      requiredField,
      minLengthUserInput,
      minLengthPassInput,
      maxLeghthInput,
      incorrectEmail,
      strongPass,
      userFormChar,
      emailEmailFormError,
      noError,
    } = errMessage;

    switch (inputName) {
      case inputProperty.username: {
        if (inputValue === "") {
          setErrors({ ...errors, userError: requiredField });
        } else if (inputValue.length < 4) {
          setErrors({ ...errors, userError: minLengthUserInput });
        } else if (inputValue.length > 20) {
          setErrors({ ...errors, userError: maxLeghthInput });
        } else if (!UserReg.test(inputValue)) {
          setErrors({ ...errors, userError: userFormChar });
        } else {
          setErrors({ ...errors, userError: noError });
        }
        break;
      }
      case inputProperty.password: {
        if (inputValue === "") {
          setErrors({ ...errors, passwordError: requiredField });
        } else if (inputValue.length < 8) {
          setErrors({
            ...errors,
            passwordError: minLengthPassInput,
          });
        } else if (inputValue.length > 20) {
          setErrors({ ...errors, passwordError: maxLeghthInput });
        } else if (!PassReg.test(inputValue)) {
          setErrors({ ...errors, passwordError: strongPass });
        } else {
          setErrors({ ...errors, passwordError: noError });
        }
        break;
      }
      case inputProperty.email: {
        if (inputValue === "") {
          setErrors({ ...errors, emailError: requiredField });
        } else if (inputValue.indexOf("@") === -1) {
          setErrors({ ...errors, emailError: incorrectEmail });
        } else if (!EmailReg.test(inputValue)) {
          setErrors({ ...errors, emailError: emailEmailFormError });
        } else {
          setErrors({ ...errors, emailError: noError });
        }
        break;
      }
      case inputProperty.confirmEmail: {
        if (inputValue === "") {
          setErrors({
            ...errors,
            confirmEmailError: requiredField,
          });
        } else if (inputValue.indexOf("@") === -1) {
          setErrors({ ...errors, confirmEmailError: incorrectEmail });
        } else if (!EmailReg.test(inputValue)) {
          setErrors({ ...errors, confirmEmailError: emailEmailFormError });
        } else {
          setErrors({ ...errors, confirmEmailError: noError });
        }
        break;
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = formValidation();
    if (validation.correct) {
      setValues(initialState);
      setErrors(initialErrors);
      const newUser = {
        username: values.username,
        password: values.password,
        email: values.email,
      };
      console.log(newUser);
    } else {
      setErrors({
        ...errors,
      });
    }
  };

  const formValidation = () => {
    let username = false;
    let password = false;
    let email = false;
    let confirmEmail = false;
    let correct = false;
    let comparisonEmails = false;

    if (UserReg.test(values.username)) {
      username = true;
    }
    if (values.password.length > 8) {
      password = true;
    }

    if (EmailReg.test(values.email)) {
      email = true;
    }

    if (EmailReg.test(values.email)) {
      confirmEmail = true;
    }

    if (values.email !== values.confirmEmail) {
      setErrors({
        ...errors,
        emailError: errMessage.comparisonEmailsError,
        confirmEmailError: errMessage.comparisonEmailsError,
      });
    } else {
      comparisonEmails = true;
    }

    // TODO nie działa ustawianie errora w tej funkcji.

    if (username && password && email && confirmEmail && comparisonEmails) {
      correct = true;
    }
    return { username, password, email, correct };
  };

  return (
    <Wrapper theme={"light"}>
      <FormFlex>
        <Input
          name={inputProperty.username}
          type={inputProperty.type.text}
          label={inputProperty.label.username}
          value={values.username}
          error={errors.userError}
          onInputChange={handleOnChange}
        />
        <Input
          name={inputProperty.password}
          type={inputProperty.type.password}
          label={inputProperty.label.password}
          value={values.password}
          error={errors.passwordError}
          onInputChange={handleOnChange}
        />
        <Input
          name={inputProperty.email}
          type={inputProperty.type.email}
          label={inputProperty.label.email}
          value={values.email}
          error={errors.emailError}
          onInputChange={handleOnChange}
        />
        <Input
          name={inputProperty.confirmEmail}
          type={inputProperty.type.email}
          label={inputProperty.label.confirmEmail}
          value={values.confirmEmail}
          error={errors.confirmEmailError}
          onInputChange={handleOnChange}
        />
        <Button type="submit" name="Register" click={handleSubmit} />
      </FormFlex>
    </Wrapper>
  );
}
