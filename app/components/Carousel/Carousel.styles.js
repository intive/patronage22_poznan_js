import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

export const CarouselOuter = styled.div`
  border: none;
  overflow: hidden;
  position: relative;
  padding-top: 8px;
  & .carousel-nav-button {
    display: none;
  }

  &:hover .carousel-nav-button {
    display: block;
  }

  ${device.tablet} {
    padding-top: 16px;
  }
`;

export const CarouselInner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
  transform: ${({ activeScreen }) => `translateX(-${activeScreen * 100}%)`};
`;

export const CarouselItemWrapper = styled.div`
  width: calc(100% / ${(props) => props.tileCount});
  display: inline-block;
  padding-right: 12px;
`;

export const CarouselItemInner = styled.div`
  width: 100%;
  background-color: transparent;
  text-align: center;
  border-radius: 5px;
  /* cursor: pointer; */
`;

export const NavButton = styled.button`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 30%,
    rgba(0, 0, 0, 0.7) 70%,
    rgba(0, 0, 0, 0) 100%
  );
  color: white;
  font-size: 20px;
  border: none;
  position: absolute;
  left: ${({ left }) => (left ? 0 : 'auto')};
  right: ${({ right }) => (right ? 0 : 'auto')};
  top: 10%;
  width: 40px;
  height: 70%;
  margin-right: 12px;
  cursor: pointer;
`;
