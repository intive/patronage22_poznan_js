import PropTypes from 'prop-types';
import { StyledBtn } from './NavButton.styles';
import Icon from 'components/Icon';

const NavButton = ({ handleClick, type, ...props }) => {
  return (
    <>
      <StyledBtn onClick={handleClick} {...props}>
        <Icon type={type} color="#fff" />
      </StyledBtn>

      <StyledBtn onClick={handleClick} {...props}>
        <Icon type={type} color="#fff" />
      </StyledBtn>
    </>
  );
};

NavButton.propTypes = {
  handleClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  type: PropTypes.oneOf(['chevron-left', 'chevron-right']),
};

export default NavButton;
