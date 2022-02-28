import styled from 'styled-components';
import Icon from 'components/Icon';

export default function MediaButton(props) {
  return (
    <Button>
      <MediaButtonIcon type={props.type} />
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

const MediaButtonIcon = styled(Icon)`
  margin-right: 0.7em;
`;
