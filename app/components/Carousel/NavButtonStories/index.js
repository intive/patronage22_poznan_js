import PropTypes from 'prop-types';
import { StyledBtn } from './NavButton.styles';
import Icon from 'components/Icon';

const NavButton = ({ handleClick, type, ...props }) => {
  return (
    <>
      <StyledBtn onClick={handleClick} {...props}>
        <Icon type={type} />
      </StyledBtn>

      <StyledBtn onClick={handleClick} {...props}>
        <Icon type={type} />
      </StyledBtn>
    </>
  );
};

NavButton.propTypes = {
  color: PropTypes.string,
  handleClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  type: PropTypes.oneOf(['chevron-left', 'chevron-right']),
};

export default NavButton;
