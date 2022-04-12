import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

import Button from 'components/UI/Button';

export const FullScreenWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  overflow-y: auto;
  z-index: 1001;
  background: linear-gradient(180deg, rgba(30, 27, 38, 0.56) 0%, rgba(30, 27, 38, 0.08) 100%);
`;
export const ContentWrapper = styled.div`
  max-height: 100%;
  max-width: 100%;
  min-width: 100%;
  position: relative;
  color: white;
  background-color: #1e1b26;
  ${device.tablet} {
    max-height: 90vh;
    max-width: 80%;
    min-width: 80%;
    border-radius: 8px;
    overflow-y: auto;
  }
  ${device.desktop} {
    max-height: 95vh;
    max-width: 60%;
    min-width: 60%;
  }
`;

export const ButtonClose = styled(Button)`
  position: absolute;
  right: 16px;
  top: 12px;
  z-index: 99;
`;
