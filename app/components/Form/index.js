import styled from 'styled-components';

export function Input(props) {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input style={{borderRadius: "2px", height: "25px", margin: "2px"}}
                id={props.id}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.onInputChange} />
            {props.error && <div style={{ color: "red"}}>{props.error}</div>}
        </>
    )
}

export const Button = styled.button`
    height: 30px;
    border-radius: 3px;
    background-color: rgb(50, 147, 168);
    font-weight: bold;
`;

export const FormFlex = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 400px;
`;
