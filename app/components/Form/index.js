import styled from 'styled-components';

export function Input({ id, label, name, type, value, onInputChange, error, className, ...props }) {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <PrimaryInput
        id={id}
        name={name || id}
        type={type}
        value={value}
        onChange={onInputChange}
        {...props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
}

export const FormFlex = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

const PrimaryInput = styled.input`
  border-radius: 5px;
  border-color: black;
`;

const ErrorMessage = styled.div`
  color: red;
`;
