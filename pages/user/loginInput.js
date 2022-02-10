import styled from 'styled-components';

export function LoginInput(props) {
  return (
    <>
      <label htmlFor={props.id} style={{ display: 'none' }}>
        {props.label}
      </label>
      <InputStyle
        id={props.id}
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onInputChange}
      />
      {props.error && <ErrorMessage>{props.error}</ErrorMessage>}
    </>
  );
}

const InputStyle = styled.input`
  margin-bottom: 1.4rem;
  padding-left: 10px;
  width: 17rem;
  height: 3rem;
  border-radius: 5px;
  border-color: black;
  background-color: #3a3b3a;
  letter-spacing: 0.3px;
  @media (min-width: 768px) {
    width: 16rem;
  }
`;
const ErrorMessage = styled.div`
  margin-top: -1.5rem;
  height: 1.5rem;
  color: red;
`;
