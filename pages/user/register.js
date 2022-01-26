import { Input, FormFlex } from "components/Form/index";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  margin: 50px auto;
  background-color: ${(props) => (props.theme === "light" ? "#fff" : "#666")};
`;

export default function UserRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [userPasswordError, setUserPasswordError] = useState("");
  const [userEmailError, setUserEmailError] = useState("");
  const [userConfirmEmailError, setUserConfirmEmailError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setUsernameError("");
    setUserPasswordError("");
    setUserEmailError("");
    setUserConfirmEmailError("");

    if (username === "") {
      setUsernameError("username is required");
    } else if (username.length < 5) {
      setUsernameError("username should be a min 5 characters");
    }
    if (password === "") {
      setUserPasswordError("password is required");
    } else if (password.length < 8) {
      setUserPasswordError("password should be a min 8 characters");
    }

    if (email === "") {
      setUserEmailError("email is required!");
    } else if (email.indexOf("@") === -1) {
      setUserEmailError("check your email adress!");
    }

    if (confirmEmail === "") {
      setUserConfirmEmailError("email is required!");
    } else if (confirmEmail.indexOf("@") === -1) {
      setUserConfirmEmailError("check your email adress!");
    }

    if (email !== confirmEmail) {
      setUserEmailError("email must be the same!");
      setUserConfirmEmailError("email must be the same!");
    }

    if (username && password && email && confirmEmail) {
      const newUser = { username, password, email };
      console.log(newUser);
    }
  };

  return (
    <Wrapper theme={"light"}>
      <FormFlex>
        <Input
          id="username"
          name="username"
          type="text"
          label="Username"
          value={username}
          error={usernameError}
          onInputChange={(e) => setUsername(e.target.value)}
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          value={password}
          error={userPasswordError}
          onInputChange={(e) => setPassword(e.target.value)}
        />
        <Input
          id="email"
          name="email"
          type="text"
          label="Email"
          value={email}
          error={userEmailError}
          onInputChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id="Confirmemail"
          name="Confirmemail"
          type="text"
          label="Confirmemail"
          value={confirmEmail}
          error={userConfirmEmailError}
          onInputChange={(e) => setConfirmEmail(e.target.value)}
        />
        <button onClick={handleSubmit} type="submit">
          Register
        </button>
      </FormFlex>
    </Wrapper>
  );
}
