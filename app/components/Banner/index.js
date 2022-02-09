import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";

export const Wrapper = styled.div`
  background-image: url(${(props) => props.imgLink});
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

export const Title = styled.h1`
  color: white;
  font-size: 3em;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDir};
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

const MediaButton = styled.button`
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

const MuteIcon = styled(FontAwesomeIcon)`
  color: #ffffff;
  font-size: 1.8em;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const PlayIcon = styled(FontAwesomeIcon)`
  margin-right: 0.7em;
`;

export function Media() {
  const [isMute, setMute] = useState(false);

  const toggleMute = () => setMute(!isMute);

  return (
    <MediaBox>
      <MediaButton>
        <PlayIcon icon={faPlay} />
        Play
      </MediaButton>
      <MuteIcon
        icon={isMute ? faVolumeMute : faVolumeUp}
        onClick={toggleMute}
      />
    </MediaBox>
  );
}
