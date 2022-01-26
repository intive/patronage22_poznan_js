import { Input } from 'components/Form/index';
import { Wrapper, FormFlex } from '../../app/components/Form/form-styling-components'
import { useState } from 'react';

export default function UserLogin() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const userLogin = async (e) => {
        e.preventDefault();
        setUsernameError('');
        if (!username || username.length < 5) {
            setUsernameError('Invalid username');
        }

        const user = { username, password };
        console.log(user);
    }

    return (
        <Wrapper theme={"light"}>
            <FormFlex>
                <Input
                    id="username"
                    name="username"
                    type="text"
                    label="Username"
                    value={username}
                    errorMsg={usernameError}
                    onInputChange={(e) => setUsername(e.target.value)} />
                <Input
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
                    onInputChange={(e) => setPassword(e.target.value)} />
                <button onClick={userLogin}>Sign In</button>
            </FormFlex>
        </Wrapper>
    )
}
