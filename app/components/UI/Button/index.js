import PropTypes from 'prop-types';
import StyledButton from './Button.styles';
import Link from 'next/link';

const Button = ({ children, href, className, ...props }) => (
  <>
    {href ? (
      <Link href={href} passHref className={className}>
        <StyledButton as="a" {...props}>
          {children}
        </StyledButton>
      </Link>
    ) : (
      <StyledButton {...props} className={className}>
        {children}
      </StyledButton>
    )}
  </>
);

Button.propTypes = {
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  fullWidth: PropTypes.bool,
  withIcon: PropTypes.bool,
  onlyIcon: PropTypes.bool,
  iconWithBg: PropTypes.bool,
};

export default Button;
