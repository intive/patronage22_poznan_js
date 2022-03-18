import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

import Button from 'components/UI/Button';

export const FullScreenWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1001;
  background: linear-gradient(180deg, rgba(30, 27, 38, 0.56) 0%, rgba(30, 27, 38, 0.08) 100%);
`;
export const ContentWrapper = styled.div`
  min-height: 100%;
  min-width: 100%;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #1e1b26;
  ${device.tablet} {
    border-radius: 8px;
    min-height: 500px;
    min-width: 500px;
  }
`;

export const ButtonClose = styled(Button)`
  position: absolute;
  right: 16px;
  top: 12px;
  z-index: 99;
`;
