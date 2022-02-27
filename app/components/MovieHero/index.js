import { useState } from 'react';
import { faPlay, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { MediaButton } from './MediaButton';

import styled from 'styled-components';
import MediaButton from './MediaButton';
import { MuteIcon } from './MuteIcon';
import { HeroWrapper, HeroTitle, HeroContents, MediaBox } from './MovieHero.styles';

function MovieHero(props) {
  const [isMute, setMute] = useState(false);

  const toggleMute = () => setMute(!isMute);

  return (
    <HeroWrapper backgroundImg={props.heroObj.poster_path}>
      <HeroContents>
        <HeroTitle>{props.heroObj.title}</HeroTitle>
        <MediaBox>
          <MediaButton type="play" text={'Play'} />
          <MuteIcon type={isMute ? 'volume-mute' : 'volume-up'} onClick={toggleMute} />
        </MediaBox>
      </HeroContents>
    </HeroWrapper>
  );
}

export default MovieHero;
