import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

import Button from 'components/UI/Button';

export const FullScreenWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(30, 27, 38, 0.56) 0%, rgba(30, 27, 38, 0.08) 100%);
`;
export const ContentWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${({ backGroundColor }) => backGroundColor || 'transparent'};
  ${device.tablet} {
    left: 10%;
    right: 10%;
    top: 10%;
    bottom: 5%;
  }
  ${device.desktop} {
    left: 15%;
    right: 15%;
    top: 7%;
    bottom: 3%;
  }
`;

export const ButtonClose = styled(Button)`
  position: absolute;
  right: 16px;
  top: 12px;
  z-index: 99;
`;
