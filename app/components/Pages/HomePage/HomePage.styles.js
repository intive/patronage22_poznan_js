import styled from 'styled-components';
import { NavigationBar } from 'components/Header/Header.styles';

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
export const CarouselInstance = styled.div``;
export const CarouselHeader = styled.h5`
  margin-left: 30px;
  height: 0;
  padding-bottom: 40px;
  padding-top: 40px;
  font-size: 1.25rem;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`;
export const HomePageFooter = styled.div`
  height: 200px;
  background-color: #272233;
  margin-top: 40px;
`;
export const DisabledStickyHeader = styled(NavigationBar)`
  display: none;
`;
