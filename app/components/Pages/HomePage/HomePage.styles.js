import styled from 'styled-components';

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

export const CarouselWrapper = styled.div`
  margin-top: -35vh;
  color: #fff;
`;

export const CarouselHeader = styled.h5`
  margin-left: 30px;
  height: 0;
  padding-bottom: 16px;
  padding-top: 40px;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const HomePageFooter = styled.div`
  margin-top: 80px;
  height: 200px;
  background-color: #272233;
`;
