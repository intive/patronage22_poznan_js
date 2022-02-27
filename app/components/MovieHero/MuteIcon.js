import styled from 'styled-components';
import Icon from 'components/Icon';

export function MuteIcon(props) {
  return (
    <Button onClick={props.onClick} aria-pressed="false">
      <FontAwesomeIcon icon={props.icon} />
    </Button>
  );
}

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  
export const MuteIcon = styled(Icon)`
  font-size: 1.8em;
  margin: 0;
  padding: 0;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;
