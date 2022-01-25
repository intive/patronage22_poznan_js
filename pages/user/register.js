import { Input } from "../../app/components/Form"
import { useState } from "react"

import styled from 'styled-components';

const Wrapper = styled.form`
display: flex;
flex-direction: column;
width: 30%;
margin: 100px auto;
padding: 10px 10px;
`
export default function Home() {
  const initialState = {
    username: '',
    password: '',
    email: '',
    confirmEmail: ''
  }
  const [allValues, setAllValues] = useState(initialState);
  const [allErrors, setAllErrors] = useState(initialState);

  const erros = {
    userError: 'User mast be at least 5 leters',
    passwordError: 'Password mast be at least 8 leters',
    emailError: 'Invalid email',
    confrimEmailError: 'Emails nedd to bee the same',
  }

  const validateFunction = (e) => {
    e.preventDefault()
    let newUser = {}
    let validateErrors = {}
    if (allValues.username.length < 5) {
      validateErrors.usernameError = erros.userError
    }

    if (allValues.password.length < 8) {
      validateErrors.passwordError = erros.passwordError
    }

    if (!(allValues.email.includes('@') && allValues.email.length > 0)) {
      validateErrors.emailError = erros.emailError
    }
    if (!(allValues.email === allValues.confirmEmail && allValues.confirmEmail.length > 0)) {
      validateErrors.confrimEmailError = erros.confrimEmailError
    }

    let size = (Object.keys(validateErrors).length)

    if (size === 0) {
      newUser = {
        name: allValues.username,
        password: allValues.password,
        email: allValues.email,
      }
    }
    else {
      setAllErrors(prevState => (
        {
          ...prevState,
          username: validateErrors.usernameError,
          password: validateErrors.passwordError,
          email: validateErrors.emailError,
          confirmEmail: validateErrors.confrimEmailError
        }))

    }
    console.log(newUser)
  };

  return (
    <Wrapper>
      <Input
        id="username"
        name="username"
        type="text"
        label="username"
        value={allValues.username}
        error={allErrors.username}
        onInputChange={(e) => setAllValues({ ...allValues, [e.target.name]: e.target.value })} />
      <Input
        id="password"
        name="password"
        type="password"
        label="password"
        value={allValues.password}
        error={allErrors.password}
        onInputChange={(e) => setAllValues({ ...allValues, [e.target.name]: e.target.value })} />
      <Input
        id="email"
        name="email"
        type="email"
        label="email"
        value={allValues.email}
        error={allErrors.email}
        onInputChange={(e) => setAllValues({ ...allValues, [e.target.name]: e.target.value })} />
      <Input
        id="confirmEmail"
        name="confirmEmail"
        type="email"
        label="confirmEmail"
        value={allValues.confirmEmail}
        error={allErrors.confirmEmail}
        onInputChange={(e) => setAllValues({ ...allValues, [e.target.name]: e.target.value })} />
      <button onClick={validateFunction}>Sign up</button>
    </Wrapper >
  )
}
