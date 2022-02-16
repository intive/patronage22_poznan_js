import { InputStyle, ErrorMessage } from './styles';

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
