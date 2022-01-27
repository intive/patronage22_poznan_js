import { Input, FormFlex, Button,Wrapper } from 'components/Form/index';
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

        if (!username || username.length < 5) {
            isErrorOccured = true;
            setUsernameError(['Invalid username']);
        } if (!password || password.length <5) {
            isErrorOccured = true;
            setPasswordError('Invalid password');
        } if (!isErrorOccured){
        const user = { username, password };
        console.log(user);
    }}

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
                    onInputChange={(e) => setUsername(e.target.value)} />
                <Input
                    id="password"
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
