import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

export const TitleWrapper = styled.div`
  background: #1e1b26;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px 16px 8px 16px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;

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
    background: linear-gradient(180deg, rgba(30, 27, 38, 0) 0%, #1e1b26 100%);
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
