import PropTypes from 'prop-types';
import StyledButton from './Button.styles';
import Link from 'next/link';
import Spinner from '../Spinner';

const Button = ({ children, isLoading, href, className, ...props }) => (
  <>
    {href ? (
      <Link href={href} passHref className={className}>
        <StyledButton as="a" {...props}>
          {children}
        </StyledButton>
      </Link>
    ) : (
      <StyledButton {...props} className={className}>
        {isLoading ? <Spinner /> : children}
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
  onlyIcon: PropTypes.bool,
  iconWithBg: PropTypes.bool,
  padding: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Button;
