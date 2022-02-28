import styled from 'styled-components';
import Icon from 'components/Icon';

export const MuteIcon = styled(Icon)`
  font-size: 1.8em;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;
