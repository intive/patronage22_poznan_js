import { useState } from "react"

import { Input, Wrapper } from "../../app/components/Form"


export default function Registration() {
  const initialState = {
    username: '',
    password: '',
    email: '',
    confirmEmail: ''
  }
  const [allValues, setAllValues] = useState(initialState);
  const [allErrors, setAllErrors] = useState(initialState);

  const errors = {
    user: {
      length: "The username must be between 5 and 15 characters",
      invalid: 'Username contains not allowed characters'
    },
    passwordError: 'Password mast be at least 8 leters',
    emailError: 'Email address is not allowed',
    confrimEmail: 'The emails are not the same',
    emptyError: 'The field cannot be empty',
  };

  const validateFunction = (e) => {
    e.preventDefault()

    let validateErrors = {}
    const { username, password, email, confirmEmail } = allValues;

    const userPatter = /^(?=.*[a-z]{4})[-[\]\\/\w]{5,15}$/i;
    const userEmailPattern = /^[^\s@]+@((([a-z0-9]+.)+[a-z]{2,}))$/i;

    if (username === '') {
      validateErrors.usernameError = errors.emptyError
    } else if (!userPatter.test(username)) {
      if (username.length < 5 || username.length > 15) {
        validateErrors.usernameError = errors.user.length
      } else {
        validateErrors.usernameError = errors.user.invalid
      }
    }

    if (password === '') {
      validateErrors.passwordError = errors.emptyError
    } else if (password.length < 8) {
      validateErrors.passwordError = errors.passwordError
    }

    if (email === '') {
      validateErrors.emailError = errors.emptyError
    } else if (!userEmailPattern.test(email)) {
      validateErrors.emailError = errors.emailError
    }

    if (confirmEmail === '') {
      validateErrors.confrimEmailError = errors.emptyError
    } else if (confirmEmail !== email) {
      validateErrors.confrimEmailError = errors.confrimEmail
    }

    const errorsLength = Object.keys(validateErrors).length
    if (errorsLength === 0) {
      setAllErrors(initialState)
      setAllValues(initialState)
      return console.log({
        name: allValues.username,
        password: allValues.password,
        email: allValues.email,
      })
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

  };
  return (
    <Wrapper>
      <Input
        name="username"
        type="text"
        value={allValues.username}
        error={allErrors.username}
        onInputChange={(e) => setAllValues({ ...allValues, [e.target.name]: e.target.value })} />
      <Input
        name="password"
        type="password"
        value={allValues.password}
        error={allErrors.password}
        onInputChange={(e) => setAllValues({ ...allValues, [e.target.name]: e.target.value })} />
      <Input
        name="email"
        type="email"
        value={allValues.email}
        error={allErrors.email}
        onInputChange={(e) => setAllValues({ ...allValues, [e.target.name]: e.target.value })} />
      <Input
        name="confirmEmail"
        type="email"
        value={allValues.confirmEmail}
        error={allErrors.confirmEmail}
        onInputChange={(e) => setAllValues({ ...allValues, [e.target.name]: e.target.value })} />
      <button onClick={validateFunction}>Sign up</button>
    </Wrapper >
  )
}
