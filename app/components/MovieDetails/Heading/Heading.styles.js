import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

export const TitleWrapper = styled.div`
  background: #1e1b26;
  position: absolute;
  bottom: -5px;
  width: 100%;
  padding: 20px 16px 0px 16px;
  border-radius: 8px 8px 0 0;
  text-shadow: 2px 3px 5px black;
  button {
    display: none;
    text-transform: capitalize;
  }
  ${device.tablet} {
    padding: 20px 16px 20px 16px;
    background: linear-gradient(180deg, rgba(30, 27, 38, 0) 0%, #1e1b26 100%);
    button {
      display: block;
    }
  }
  ${device.desktop} {
    padding: 21px 72px 40px 72px;
  }
`;

export const MovieTitile = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 2rem;
  ${device.tablet} {
    font-size: 1.8rem;
    margin-bottom: 8px;
  }
  ${device.desktop} {
    margin-bottom: 8px;
    font-size: 3.5rem;
    line-height: 84px;
  }
`;
