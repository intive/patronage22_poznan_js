import styled from "styled-components";

export function Input(props) {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onInputChange}
      />
      {props.error && <div style={{ color: "red" }}>{props.error}</div>}
    </>
  );
}

export function Button(props) {
  return (
    <button onClick={props.click} type={props.type}>
      {props.name}
    </button>
  );
}

export const FormFlex = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

export const Wrapper = styled.div`
  width: 50%;
  margin: 50px auto;
  background-color: ${(props) => (props.theme === "light" ? "#fff" : "#666")};
`;

export const UserReg = /^[A-z0-9]\w{3,10}$/;
export const PassReg = /[!@#]/;
export const EmailReg = /^[-\w.]+@([-\w]+\.)+[a-z]+$/i;
