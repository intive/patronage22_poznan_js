import { InputWrapper, FormRow, FormInput, FormLabel, ErrorMsg } from './FloatingLabelInput.styles';

const FloatingLabelInput = ({ name, label, errorMsg, withBorder, onInputChange, ...props }) => {
  return (
    <InputWrapper>
      <FormRow>
        <FormInput
          id={name}
          name={name}
          errorMsg={errorMsg}
          onChange={onInputChange}
          withBorder={withBorder}
          {...props}
        />
        <FormLabel htmlFor={name}>{label}</FormLabel>
      </FormRow>
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </InputWrapper>
  );
};

export default FloatingLabelInput;
