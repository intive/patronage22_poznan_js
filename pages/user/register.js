import { InputReg, FormFlex, Wrapper, Button, Container } from '/app/components/Form/index';
import { useState } from 'react';

const validName = /^[0-9a-zA-Z]{6,20}$/;
const validPassword = /^[0-9a-zA-Z]{6,20}$/;
const validEmail =  /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

export default function UserLogin() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confEmail, setConfirmEmail] = useState('');    

    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [confEmailError, setConfEmailError] = useState('');

    const userSignIn = async (e) => {
        e.preventDefault();
        setUsernameError('');
        if (!validName.test(username))
        {
            setUsernameError('Username must be between 6 and 20 characters, letters and numbers are only allowed');
        }

        setPasswordError('');
        if (!validPassword.test(password))
        {
            setPasswordError('Password must be between 6 and 20 characters, letters and numbers are only allowed')
        }

        setEmailError('');
        if (!validEmail.test(email))
        {
            setEmailError('Invalid email format')
        }

        setConfEmailError('');
        if (email !== confEmail)
        {
            setConfEmailError("Emails don't match")
        }

        const user = { username, password, email };
        console.log(user);

    }

    return (
        <Container>
            <Wrapper theme={"light"}>
                <FormFlex>
                    <div>
                        <h1>Sign In form</h1>
                    </div>

                    <InputReg
                        id="username"
                        name="username"
                        type="text"
                        label="Username"
                        value={username}
                        error={usernameError}
                        onInputChange={(e) => setUsername(e.target.value)} />
                        
                    <InputReg
                        name="password"
                        type="password"
                        label="Password"
                        value={password}
                        error={passwordError}
                        onInputChange={(e) => setPassword(e.target.value)} />

                    <InputReg
                        name="email"
                        type="email"
                        label="Email"
                        value={email}
                        error={emailError}
                        onInputChange={(e) => setEmail(e.target.value)} />

                    <InputReg
                        name="confirmEmail"
                        type="email"
                        label="Confirm Email"
                        value={confEmail}
                        error={confEmailError}
                        onInputChange={(e) => setConfirmEmail(e.target.value)} />  

                    <Button onClick={userSignIn}>Sign In</Button>
                </FormFlex>
            </Wrapper>
        </Container>
    )
}
