import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

export const FormHeader = styled.div`
  width: 80px;
  height: 32px;
  ${device.tablet} {
    width: 140px;
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

export const Underlined = styled.div`
  height: 2px;
  width: 65px;
  padding-top: 4px;
  background-color: #44ec52;
  ${device.tablet} {
    width: 72px;
  }
`;
