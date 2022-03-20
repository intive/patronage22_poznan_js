import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

const HeroWrapper = styled.div`
  background-image: linear-gradient(180deg, transparent 50%, #1e1b26),
    url(${(props) => props.backgroundImg});
  background-size: cover;
  background-position: center;
  background-color: #4e564e;
  width: 100%;
  height: 100vh;
`;

const HeroContents = styled.div`
  color: #fff;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50%;
  position: absolute;
  top: 50%;

  ${device.tablet} {
    align-items: flex-start;
    margin-left: 15%;
    transform: translateY(-50%);
    width: initial;
    height: initial;
  }
`;

const HeroGenres = styled.span`
  font-size: 1.15em;
  margin-bottom: 4px;

  ${device.tablet} {
    margin-bottom: 8px;
  }
`;

const HeroTitle = styled.h1`
  color: #fff;
  font-size: 3.5em;
  margin-bottom: 4px;

  ${device.tablet} {
    margin-bottom: 24px;
  }
`;

export { HeroWrapper, HeroGenres, HeroTitle, HeroContents };
