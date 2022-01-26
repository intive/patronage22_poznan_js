import { Input } from '/app/components/Form';
import { useState } from 'react';

export default function UserLogin() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

//const getUsers = async () => {
//    const users = await fetch('/api/users/').then(res => res.json());
//    return users;
//}

//const checkUserExists = async (username) => {
//    const users = await getUsers();
//    return users.some(user => user.username === username);
//}

    const userLogin = (e) => {
        e.preventDefault();
        setUsernameError('');
        setPasswordError('');

        let validated = true;

        if (!username) {
            setUsernameError('Wprowadź nazwę użytkownika');
            validated = false;
        } 
        if (!password) {
            setPasswordError('Wprowadź hasło');
            validated = false;
        }

        if (validated) {
            const validatedUser = { 
                username: username,
                password: password };
            console.log(validatedUser);
        }

        // TODO walidacja zgodności danych logowania z danymi w users
    }    

  return (
    <form style={{margin: "auto", marginTop: "5%", display: "flex", flexDirection: "column", justifyContent: "center", width: "25%"}}>


        <Input 
            id="user" 
            name="user" 
            type="text" 
            label="user name:" 
            value={username} 
            error={usernameError}
            onInputChange={(e) => setUsername(e.target.value)} />
        <Input 
            id="password" 
            name="password" 
            type="password" 
            label="User password:"
            value={password}
            error={passwordError}
            onInputChange={(e) => setPassword(e.target.value)} />
        <button type="button" onClick={userLogin}>Login</button>
    </form>
  )
}
