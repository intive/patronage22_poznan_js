import { useState } from 'react';
import { faPlay, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { MediaButton } from './MediaButton';
import { MuteIcon } from './MuteIcon';
import { HeroWrapper, HeroTitle, HeroContents, MediaBox } from './MovieHero.styles';
import PropTypes from 'prop-types';

function MovieHero(props) {
  const [isMute, setMute] = useState(false);

  const toggleMute = () => setMute(!isMute);

  return (
    <HeroWrapper backgroundImg={props.heroObj.poster_path}>
      <HeroContents>
        <HeroTitle>{props.heroObj.title}</HeroTitle>
        <MediaBox>
          <MediaButton icon={faPlay} text={'Play'} />
          <MuteIcon icon={isMute ? faVolumeMute : faVolumeUp} onClick={toggleMute} />
        </MediaBox>
      </HeroContents>
    </HeroWrapper>
  );
}

MovieHero.propTypes = {
  backgroundImg: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};


export default MovieHero;
