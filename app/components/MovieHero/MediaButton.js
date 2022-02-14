import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MediaButton(props) {
  return (
    <Button>
      <Icon icon={props.icon} />
      {props.text}
    </Button>
  );
}

const Button = styled.button`
  padding: 0.5em 1em;
  width: 6em;
  margin-right: 1.3em;
  font-size: 1.2em;
  font-weight: bold;
  border: 0px solid;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.7em;
`;
