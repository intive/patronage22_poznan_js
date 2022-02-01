import styled from 'styled-components';

export function Input(props) {
    return (
        <>
            <label htmlFor={props.name}>{props.name}</label>
            <input
                id={props.name}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.onInputChange} />
            {props.error && <div style={{ color: "red" }}>{props.error}</div>}
        </>
    )
}

export const FormFlex = styled.form`
    display: flex;
    flex-direction: column; 
    max-width: 400px;
`;

export const Wrapper = styled.form`
display: flex;
flex-direction: column;
width: 30%;
margin: 100px auto;
padding: 10px 10px;
`