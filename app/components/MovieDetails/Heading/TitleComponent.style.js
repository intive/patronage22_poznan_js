import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

export const TitleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 8px 16px;
  padding-top: 20px;
  background: linear-gradient(180deg, rgba(30, 27, 38, 0) 0%, #1e1b26 100%);
  z-index: 1;
  button {
    display: none;
    text-transform: capitalize;
  }
  ${device.tablet} {
    button {
      margin-top: 8px;
      display: block;
    }
  }
  ${device.desktop} {
    padding: 21px 0 40px 72px;
    h2 {
      font-size: 3.5rem;
      margin-bottom: 0;
    }
  }
`;

export const MovieTitile = styled.h2`
  font-size: 1.2rem;
  ${device.tablet} {
    font-size: 1.8rem;
  }
`;
