import PropTypes from 'prop-types';
import StyledButton from './Button.styles';
import Link from 'next/link';

const Button = ({ children, href, ...props }) => (
  <>
    {href ? (
      <Link href={href} passHref>
        <StyledButton as="a" {...props}>
          {children}
        </StyledButton>
      </Link>
    ) : (
      <StyledButton {...props}>{children}</StyledButton>
    )}
  </>
);

Button.propTypes = {
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
};

export default Button;
