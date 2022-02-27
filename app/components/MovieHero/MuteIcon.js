import styled from 'styled-components';
import Icon from 'components/Icon';

export function MuteIcon(props) {
  return (
    <Button onClick={props.onClick} aria-pressed="false">
      <MuteIconStyled type={props.type} />
    </Button>
  );
}

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
`;

const MuteIconStyled = styled(Icon)`
  font-size: 2.5em;
  margin: 0;
  padding: 0;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;
