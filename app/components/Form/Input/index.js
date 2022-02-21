import PropTypes from 'prop-types';
import StyledInput from './Input.styles';
import { ErrorMessage } from './Input.styles';

const Input = ({ id, name, label, value, onInputChange, error, ...props }) => {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <StyledInput value={value} onChange={onInputChange} name={name || id} id={id} {...props} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
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
