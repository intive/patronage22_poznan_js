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

const emailRegEx = new RegExp('[a-z0-9]+@[a-z0-9]+[.]+[a-z]');
const usernameRegEx = /[^A-Za-z0-9]+/;

    const userRegister = (e) => {
        e.preventDefault();
        setUsernameError('');
        setPasswordError('');
        setMailError('');

        let validated = true;

        if (!username) {
            setUsernameError('Wprowadź nazwę użytkownika');
            validated = false;
        } else {
            if (username.match(usernameRegEx)){
                setUsernameError('Nazwa użytkownika może składać się jedynie z liter i cyfr, bez polskich znaków');
                validated = false;
            } else {
                if (username.length < 6 || username.length > 20){
                    setUsernameError('Nazwa użytkownika powinna składać się z minimum 6, maksymalnie 20 znaków');
                    validated = false;
                } 
            }
        }

        if (!password) {
            setPasswordError('Wprowadź hasło');
            validated = false;
        }
        if (password.length < 5) {
            setPasswordError('Zbyt krótkie hasło');
            validated = false;
        }
        if (!mail) {
            setMailError('Wprowadź adres e-mail');
            validated = false;
        } else {
            if (emailRegEx.test(mail) != true){
                setMailError ('Niepoprawny format adresu e-mail');
                validated = false;
            } else {
                if (mail !== reMail) {
                    setMailError('Podane adresy e-mail nie są takie same');
                    validated = false;
                } 
            }
        }     
        
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
            onInputChange={(e) => setReMail(e.target.value)} />
        <button type="button" onClick={userRegister}>Register</button>
    </form>
  )
}
