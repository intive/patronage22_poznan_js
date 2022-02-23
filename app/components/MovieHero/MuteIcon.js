import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function MuteIcon(props) {
  return (
    <Button type="button" onClick={props.onClick} aria-pressed="false">
      <Icon icon={props.icon} />
    </Button>
  );
}

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1.8em;
  margin: 0;
  padding: 0;
`;

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;
