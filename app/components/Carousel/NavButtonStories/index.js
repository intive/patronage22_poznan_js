import PropTypes from 'prop-types';
import { StyledBtn } from './NavButton.styles';

const Button = ({ content, handleClick }) => {
  return (
    <>
      <StyledBtn onClick={handleClick}>{content}</StyledBtn>

      <StyledBtn onClick={handleClick}>{content}</StyledBtn>
    </>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
};

export default Button;
