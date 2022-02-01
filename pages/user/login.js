import { Input } from 'components/Form/index';
import { FormFlex, Button, Wrapper, HeaderStyle } from 'components/Form/styleComponents'
import { useState } from 'react';

export default function UserLogin() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const userLogin = async (e) => {
        e.preventDefault();
        setUsernameError('');
        setPasswordError('');
        let isErrorOccured = false;

        if (!username) {
            isErrorOccured = true;
            setUsernameError('Enter your username');
        } else if (username.length < 5) {
            isErrorOccured = true;
            setUsernameError('Invalid username.');
        }
        if (!password) {
            isErrorOccured = true;
            setPasswordError('Enter your password.');
        } else if (password.length <5) {
            isErrorOccured = true;
            setPasswordError('Invalid password');
        }
         if (!isErrorOccured){
        const user = { username, password };
        console.log(user);
    }}

    return (
        <Wrapper theme={"light"}>
            <FormFlex>
            <HeaderStyle>Sign in</HeaderStyle>
                <Input
                    name="username"
                    type="text"
                    label="Username"
                    value={username}
                    error={usernameError}
                    onInputChange={(e) => setUsername(e.target.value)} />
                <Input
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
                    error={passwordError}
                    onInputChange={(e) => setPassword(e.target.value)} />
                <Button onClick={userLogin}>Sign In</Button>
            </FormFlex>
        </Wrapper>
    )
}
