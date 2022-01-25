import { Input, FormFlex , Wrapper, Button, Container} from '/app/components/Form/index';
import { useState } from 'react';



export default function UserLogin() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [message, setMessage] = useState('');


    const userLogin = async (e) => {
        e.preventDefault();
        setUsernameError('');
        if (!username || username.length < 5) {
            setUsernameError('Invalid username');
        }

        setPasswordError('');
        if (!password || password.length < 12 || password.length > 20){
            setPasswordError('Password need to have 12-20 char')
        }

        message = "You logged in!"
        setMessage(alert(message))

    }

    return (
        <Container>
            <Wrapper theme={"light"}>
                <FormFlex>
                    <div>
                        <h1>Log In form</h1>
                    </div>

                    <Input
                        id="username"
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
        </Container>
    )
}