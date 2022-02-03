import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url(${(props) => props.imgLink});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  padding: 4rem;
`;

export const Title = styled.h1`
  color: white;
  font-size: 3rem;
`;

export const Contents = styled.div`
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

const MediaButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  margin-right: 1rem;
`

export function Media() {
  return(
    <MediaBox>
      <MediaButton>Play</MediaButton>
      <span>MuteIcon</span>
    </MediaBox>
  )
}
