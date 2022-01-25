import { Input } from '/app/components/Form/index';
import { FormWrapper, FormContent, Form, FormTitle, FormButton } from '../../app/components/Form/form-styling-components'
import { validateFormInputs } from '../../app/utils/validateFormInputs';
import { useState, useEffect } from 'react';

export default function UserRegistration() {
    const [inputValues, setInputValues] = useState({
        username: '',
        password: '',
        email: '',
        emailConfirmation: ''
    })
    const [errorMsg, setErrorMsg] = useState({})
    const [isSubmitting, setIfIsSubmitting] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setInputValues({
            ...inputValues,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrorMsg(validateFormInputs(inputValues))
        setIfIsSubmitting(true)
    }

    useEffect(() => {
        if (Object.keys(errorMsg).length === 0 && isSubmitting) {
            const { username, password, email } = inputValues
            console.log({
                username,
                password,
                email
            })
            setInputValues({
                username: '',
                password: '',
                email: '',
                emailConfirmation: ''
            })
            return {
                username,
                password,
                email
            }
        }
    }, [errorMsg])

    return (
        <FormWrapper>
            <FormContent>
                <FormTitle>Rejestracja</FormTitle>
                <Form onSubmit={handleSubmit}>
                    <Input
                        id="username"
                        name="username"
                        type="text"
                        label="Nazwa użytkownika"
                        value={inputValues.username}
                        errorMsg={errorMsg.username}
                        onInputChange={handleInputChange} />
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        label="Hasło"
                        value={inputValues.password}
                        errorMsg={errorMsg.password}
                        onInputChange={handleInputChange} />
                    <Input
                        id="email"
                        name="email"
                        type="text"
                        label="Email"
                        value={inputValues.email}
                        errorMsg={errorMsg.email}
                        onInputChange={handleInputChange} />
                    <Input
                        id="email-confirmation"
                        name="emailConfirmation"
                        type="email"
                        label="Email confirmation"
                        value={inputValues.emailConfirmation}
                        errorMsg={errorMsg.emailConfirmation}
                        onInputChange={handleInputChange} />
                    <FormButton>Zarejestruj się</FormButton>
                </Form>
            </FormContent>
        </FormWrapper>
    )
}