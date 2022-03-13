import PropTypes from 'prop-types';
import { StyledInput, InputLabel, InputWrapper, ErrorMessage, ErrorIcon } from './Input.styles';

const Input = ({ id, name, label, value, onInputChange, error, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput
        value={value}
        onChange={onInputChange}
        name={name || id}
        id={id}
        error={error}
        {...props}
      />
      <InputLabel htmlFor={id}>{label}</InputLabel>
      {error && (
        <ErrorMessage>
          <ErrorIcon type="x-mark" />
          {error}
        </ErrorMessage>
      )}
    </InputWrapper>
  );
};

Input.propTypes = {
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  onInputChange: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default Input;
