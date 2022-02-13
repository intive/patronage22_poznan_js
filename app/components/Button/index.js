import PropTypes from 'prop-types';
import StyledButton from './Button.styles';

const Button = ({ children, href, ...props }) => (
  <StyledButton as={href ? 'a' : null} href={href} {...props}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
};

export default Button;
