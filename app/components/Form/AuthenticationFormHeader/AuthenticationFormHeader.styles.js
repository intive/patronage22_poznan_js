import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 130px;
  ${device.tablet} {
    height: 140px;
  }
`;

export const TabWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 170px;
  padding-top: 50px;
  font-size: 20px;
  line-height: 32px;
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
