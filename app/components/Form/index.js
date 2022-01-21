import styled from 'styled-components';

export function Input(props) {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                id={props.id}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.onInputChange} />
            {props.error && <div style={{ color: "red"}}>{props.error}</div>}
        </>
    )
}

export const FormFlex = styled.form`
    display: flex;
    flex-direction: column; 
    max-width: 400px;
`;
