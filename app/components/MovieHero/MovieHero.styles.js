import styled from 'styled-components';
import { device } from '../../consts/mediaQueries';

const HeroWrapper = styled.div`
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-position: center;
  background-color: #4e564e;
  width: 100%;
  height: 100vh;
`;

const HeroContents = styled.div`
  //TO CONSIDER:text color could change to white or black based on actual background color
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50%;
  position: absolute;
  top: 50%;
  background: linear-gradient(180deg, rgba(32, 32, 32, 0) 0%, #1e1b26 75%, #1e1b26 100%);

  ${device.tablet} {
    align-items: flex-start;
    margin-left: 161px;
    background: 0;
    top: 268px;
    width: initial;
    height: initial;
  }
`;

const HeroGenres = styled.span`
  font-size: 0.75em;
  margin-bottom: 4px;

  ${device.tablet} {
    margin-bottom: 8px;
  }
`;

const HeroTitle = styled.h1`
  color: #fff;
  font-size: 2.5em;
  margin-bottom: 4px;

  ${device.tablet} {
    margin-bottom: 24px;
  }
`;

export { HeroWrapper, HeroGenres, HeroTitle, HeroContents };
