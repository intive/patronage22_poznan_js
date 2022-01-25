import { Input } from '/app/components/Form';
import { useState } from 'react';
// import styled from 'styled-components';

export default function UserRegister() {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [mail, setMail] = useState('');
const [reMail, setReMail] = useState('');

const [usernameError, setUsernameError] = useState('');
const [passwordError, setPasswordError] = useState('');
const [mailError, setMailError] = useState('');

const getUsers = async () => {
    const users = await fetch('/api/users/')
    .then(res => res.json());
    return users;
}

const checkUserExists = async (username) => {
    const users = await getUsers()
    .then (result => {
        return result.some(user => user.username === username);
    });
    
}

    const userRegister = (e) => {
        // preventDefault zapobiega wyświetleniu polecenia w adresie URL
        e.preventDefault();

        // walidacja username

        setUsernameError('');
        setPasswordError('');
        setMailError('');

        let validated = true;

        // TODO sprawdź, czy taki użytkownik istnieje w users

        // if (checkUserExists(username) === true){
        //     alert('istnieje');
        // }
        // if (!checkUserExists(username) === false){
        //     alert('NIE istnieje');
        // }

        if (!username) {
            setUsernameError('Wprowadź nazwę użytkownika');
            validated = false;
        }
        if (username.length < 5 && username.length > 0){
            setUsernameError('Zbyt krótka nazwa użytkownika');
            validated = false;
        }
        if (username.length > 20){
            setUsernameError('Zbyt długa nazwa użytkownika');
            validated = false;
        }
        let usernameRegEx = /[^A-Za-z0-9]+/;
        if (username.match(usernameRegEx)){
            setUsernameError('Nazwa użytkownika może składać się jedynie z liter i cyfr, bez polskich znaków');
            validated = false;
        } 

        // walidacja pass

        if (!password) {
            setPasswordError('Wprowadź hasło');
            validated = false;
        }
        if (password.length < 5) {
            setPasswordError('Zbyt krótkie hasło');
            validated = false;
        }

        // walidacja e-mail

        if (mail !== reMail) {
            setMailError('Podane adresy e-mail nie są takie same');
            validated = false;
        }
        let emailRegEx = new RegExp('[a-z0-9]+@[a-z0-9]+[.]+[a-z]');
        if (emailRegEx.test(mail) != true){
            setMailError ('Niepoprawny format adresu e-mail');
            validated = false;
        } 
        if (!mail) {
            setMailError('Wprowadź adres e-mail');
            validated = false;
        }

        // TODO sprawdzenie, czy dany adres nie został już wykorzystany      
        
        if (validated) {
            const validatedUser = { 
                username: username,
                password: password,
                email: mail };
            console.log(validatedUser);
        }


    }    
    
  return (
    <form style={{margin: "auto", marginTop: "5%", display: "flex", flexDirection: "column", justifyContent: "center", width: "25%"}}>

        <Input 
            id="user" 
            name="user" 
            type="text" 
            label="User name:" 
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
        <Input 
            id="mail" 
            name="mail" 
            type="email" 
            label="User e-mail:"
            value={mail}
            error={mailError}
            onInputChange={(e) => setMail(e.target.value)} />
        <Input 
            id="reMail" 
            name="reMail" 
            type="email" 
            label="Confirm User e-mail:"
            value={reMail}
            // error={reMailError}
            onInputChange={(e) => setReMail(e.target.value)} />
        <button type="button" onClick={userRegister}>Register</button>
    </form>
  )
}
