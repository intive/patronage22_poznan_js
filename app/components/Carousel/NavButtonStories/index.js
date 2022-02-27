import PropTypes from 'prop-types';
import { StyledBtn } from './NavButton.styles';

const Button = ({ content, handleClick, ...props }) => {
  return (
    <>
      <StyledBtn onClick={handleClick} {...props}>
        {content}
      </StyledBtn>

      <StyledBtn onClick={handleClick} {...props}>
        {content}
      </StyledBtn>
    </>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  backgroundColor: PropTypes.string,
};

export default Button;
