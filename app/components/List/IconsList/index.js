import PropTypes from 'prop-types';
import Icon from 'components/UI/Icon';
import { mockIcons } from 'components/Footer/mockLists';
import { IconWrapper, IconList } from './IconsList.style';

export default function IconsList({ ...props }) {
  return (
    <IconList {...props}>
      {mockIcons.map((icon) => (
        <IconWrapper key={icon.id}>
          <Icon type={icon.icon} />
        </IconWrapper>
      ))}
    </IconList>
  );
}
IconsList.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  flexDirection: PropTypes.string,
  fontSize: PropTypes.string,
};
