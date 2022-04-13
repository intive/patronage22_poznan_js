import PropTypes from 'prop-types';
import { PlayerContainer, Placeholder } from './Player.styles';

export default function Player({ ...props }) {
  return (
    <PlayerContainer>
      {props.src ? (
        <>
          <embed
            src={props.src}
            wmode="transparent"
            width={props.width}
            height={props.height}
            allowFullScreen
            title={props.title}
          />
        </>
      ) : (
        <Placeholder>Video not found</Placeholder>
      )}
    </PlayerContainer>
  );
}

Player.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
