import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

export const HomePageWrapper = styled.div`
  margin-top: -20px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, rgba(32, 32, 32, 0) 0%, #1e1b26 13%, #1e1b26 100%); ;
`;

export const MovieHeroWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

export const CarouselsWrapper = styled.div`
  margin: -20vh 30px 40px;
  color: #fff;
  ${device.tablet} {
    margin-top: -30vh;
  }
`;

export const CarouselContainer = styled.div`
  padding-top: 24px;
  ${device.tablet} {
    padding-top: 40px;
  }
`;

export const CarouselHeader = styled.h5`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  ${device.tablet} {
    font-size: 1.25rem;
    font-weight: 700;
  }

  &:hover {
    text-decoration: underline;
  }
`;
