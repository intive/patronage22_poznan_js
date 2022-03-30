import styled, { css } from 'styled-components';
import { device } from 'consts/mediaQueries';

const HeroWrapper = styled.div`
  background-image: linear-gradient(180deg, transparent 50%, #1e1b26),
    url(${(props) => props.backgroundImg});
  background-size: cover;
  background-position: top center;
  background-color: #4e564e;
  width: 100%;
  height: 100%;
`;

const HeroContents = styled.div`
  color: #fff;
  text-shadow: 1px 2px 5px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 20%;

  ${device.tablet} {
    bottom: 35%;
    align-items: flex-start;
    margin-left: 15%;
    max-width: 60%;
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
  margin-bottom: 12px;
  max-width: 90%;
  line-height: 1.1;
  text-align: center;
  word-wrap: break-word;

  ${device.tablet} {
    margin-bottom: 24px;
    text-align: initial;
  }

  ${({ medium }) =>
    medium &&
    css`
      font-size: 2.75em;
    `}

  ${({ long }) =>
    long &&
    css`
      font-size: 2.25em;
    `}
`;

export { HeroWrapper, HeroGenres, HeroTitle, HeroContents };
