import styled from "styled-components"

export function LoginInput(props) {
    return (
        <>
            <label htmlFor={props.id} style={{ display: "none" }}>{props.label}</label>
            <InputStyle
                id={props.id}
                name={props.name}
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onInputChange} />
            {props.error && <div style={{ color: "red" }}>{props.error}</div>}
        </>
    )
}

const InputStyle = styled.input`
	background-color: #3a3b3a;
	width: 60vw;
	height: 7vh;
	// margin-top: 2.3vh;
	margin-bottom: 2.3vh;
	border-radius: 5px;
	border-color: black;
	padding-left: 10px;
	letter-spacing: 0.3px;
`;