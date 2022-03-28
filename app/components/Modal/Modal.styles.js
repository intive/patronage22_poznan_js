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
  min-height: 100%;
  min-width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  color: white;
  background-color: #1e1b26;
  ${device.tablet} {
    border-radius: 8px 8px;
    min-height: 80%;
    min-width: 500px;
    max-width: 70%;
  }
  ${device.desktop} {
    max-width: 50%;
    min-width: 850px;
    min-height: 90%;
    img {
      border-radius: 8px;
    }
  }
`;

export const ButtonClose = styled(Button)`
  position: absolute;
  right: 16px;
  top: 12px;
  z-index: 99;
`;
