import { useState } from 'react';
import styled from 'styled-components';
import {
  faPlay,
  faVolumeUp,
  faVolumeMute,
} from '@fortawesome/free-solid-svg-icons';
import MediaButton from './MediaButton';
import { MuteIcon } from './MuteIcon';

export default function MovieHero(props) {
  const [isMute, setMute] = useState(false);

  const toggleMute = () => setMute(!isMute);

  return (
    <HeroWrapper backgroundImg={props.heroObj.poster_path}>
      <HeroContents>
        <HeroTitle>{props.heroObj.title}</HeroTitle>
        <MediaBox>
          <MediaButton icon={faPlay} text={'Play'} />
          <MuteIcon
            icon={isMute ? faVolumeMute : faVolumeUp}
            onClick={toggleMute}
          />
        </MediaBox>
      </HeroContents>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  padding: 4em;
  font-size: 18px;

  @media (max-width: 480px) {
    font-size: 15px;
    padding: 2.5em;
  }
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: 3em;
`;

const HeroContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const MediaBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
`;
