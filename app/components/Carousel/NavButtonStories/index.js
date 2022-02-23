import PropTypes from 'prop-types';
import { StyledBtn } from './NavButton.styles';

const Button = ({text, handleClick, left, right}) => {
    <>
      <StyledBtn 
      left={left}
      onClick={handleClick}>{text}</StyledBtn>

      <StyledBtn 
      right={right}
      onClick={handleClick}>{text}</StyledBtn>
    </>
}

Button.propTypes = {
    text: PropTypes.string,
    handleClick: PropTypes.func,
};

export default Button;