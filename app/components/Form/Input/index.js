import PropTypes from 'prop-types';
import StyledInput, { InputLabel, InputWrapper, ErrorMessage } from './Input.styles';

const Input = ({ id, name, label, value, onInputChange, error, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput value={value} onChange={onInputChange} name={name || id} id={id} {...props} />
      {label && (
        <InputLabel htmlFor={id} error={error}>
          {label}
        </InputLabel>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
};

Input.propTypes = {
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  onInputChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default Input;
