import { Input } from 'components/Form/index';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 50%;
    margin: 50px auto;
    background-color: ${(props) => props.theme === 'light' ? '#fff' : '#666'};
`;

const FormFlex = styled.form`
    display: flex;
    flex-direction: column; 
    max-width: 400px;
`;

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
