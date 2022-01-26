import styled from 'styled-components';

export function Input(props) {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input style={{backgroundColor: '#f2f2f2', border: 'none', height: '25px', marginBottom: '5px'}}
                id={props.id}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.onInputChange} />
            {props.error && <div style={{ color: "red"}}>{props.error}</div>}
        </>
    )
}


// Sign up form

export function InputReg(props) {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input style={{backgroundColor: '#f2f2f2', border: 'none', height: '25px', marginBottom: '5px'}}
                id={props.id}
                name={props.name}
                type={props.name}
                value={props.value}
                onChange={props.onInputChange} />
            {props.error && <div style={{ color: "red"}}>{props.error}</div>}
        
        </>
    )
}

export const InputStyle = styled.input`
    background-color: #f2f2f2;
    border: none;
    height: 25px;
`;

// Form Style component //

export const FormFlex = styled.form`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    max-width: 400px;
    margin: 5% auto 0;
    font-size: 13px;
`;


// Container style component //

export const Container = styled.div`
    background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
	max-width: 30%;
	margin: 0 auto;

`


// Wrapper Style component //

export const Wrapper = styled.div`
    width: 80%;
    margin: 50px auto;
    background-color: ${(props) => props.theme === 'light' ? '#fff' : '#666'};
    `;



// Button component //

export const Button = styled.button`
    margin-top: 15px;
    background-color: green;
    color: #fff;
    padding: 6px 20px;
    border-radius: 4px;
    border:2px solid green;
    margin-bottom: 30px;

    &:hover,
    &:focus{
        background-color: #fff;
        color: green;
        border: 2px solid green;

    }
`;


// RegEx component

export const validName = new RegExp(
    '^[0-9a-zA-Z]{6,20}$'
);

export const validPassword = new RegExp(
    '^[0-9a-zA-Z]{6,20}$'
);

export const validEmail =  new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$" // Użyty stary RegExp - niepoprawny
);

