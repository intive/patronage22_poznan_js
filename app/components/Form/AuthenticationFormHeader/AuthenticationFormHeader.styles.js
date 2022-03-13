import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  padding-bottom: 24px;
  ${device.tablet} {
    padding-bottom: 32px;
  }
`;

export const StyledLogo = styled.div`
  width: clamp(70px, 10vw, 100px);
  height: 100%;
  position: relative;
`;

export const TabWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 170px;
  padding-top: 48px;
  font-size: 1.25rem;
  line-height: 1.6;
`;

export const TabButton = styled.button`
  padding: 0;
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  text-decoration: ${({ active }) => active && 'solid underline #44ec52 2px'};
  text-underline-offset: 4px;
`;
