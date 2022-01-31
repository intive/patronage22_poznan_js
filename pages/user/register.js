import { useState, useEffect } from "react/cjs/react.development";
import { Input, FormFlex } from "components/Form";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  margin: 50px auto;
  background-color: ${(props) => (props.theme === "light" ? "#fff" : "#666")};
`;

export default function UserRegister() {
  const initValues = {
    username: "",
    email: "",
    confirmEmail: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initValues);
  const [formErrors, setFormErrors] = useState(initValues);
  const [submitted, setSubmitted] = useState(false);

  const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmin = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    setSubmitted(true);
  };

  /*  Show updated data if the validation passed
      (problem solved, erlier user had to press the button twice)
      ('useEffect' is the sollution) 
  */
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0) {
      console.log(formValues);
      console.log(submitted);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    /* Username validation
     */
    if (!values.username) {
      errors.username = "Username is required";
    } else if (values.username.length < 6) {
      errors.username = "Username must be at least 6 characters!";
    } else if (values.username.length > 20) {
      errors.username = "Username must be 20 characters or less!";
    } else if (/\W/.test(values.username)) {
      errors.username = "Only characters and digits allowed!";
    }

    /* Email validation
     */
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegEx.test(values.email)) {
      errors.email = "Not valid format!";
    }

    /* confirm email validation
     */
    if (values.email !== values.confirmEmail) {
      errors.confirmEmail = "Emails must be the same!";
    }

    /* Password validation
     */
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters!";
    }

    return errors;
  };

  return (
    <Wrapper theme={"light"}>
      <FormFlex>
        <Input
          label="Username"
          id="username"
          name="username"
          type="text"
          value={formValues.username}
          onInputChange={handleChange}
          error={formErrors.username}
        />

        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          value={formValues.email}
          onInputChange={handleChange}
          error={formErrors.email}
        />

        <Input
          label="Confirm email"
          id="confirmEmail"
          name="confirmEmail"
          type="email"
          value={formValues.confirmEmail}
          onInputChange={handleChange}
          error={formErrors.confirmEmail}
        />

        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          value={formValues.password}
          onInputChange={handleChange}
          error={formErrors.password}
        />

        <button onClick={handleSubmin}>Sign up</button>
        <pre>{/* JSON.stringify(formValues, undefined, 2) */}</pre>
      </FormFlex>
    </Wrapper>
  );
}
