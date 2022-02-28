import styled from 'styled-components';
import Icon from 'components/Icon';

export function MuteIcon(props) {
  return (
    <Button onClick={props.onClick} aria-pressed="false">
      <Icon type={props.type} />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  font-size: 2.1em;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;
