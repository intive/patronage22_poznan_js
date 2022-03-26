import styled from 'styled-components';
import { device } from '/app/consts/mediaQueries';

export const NavigationBar = styled.header`
  background: linear-gradient(180deg, #1e1b26 0%, rgba(30, 27, 38, 0) 100%);
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 12px;
  z-index: 1;
  ${device.tablet} {
    height: 74px;
    padding: 24px 30px;
  }
  ${device.desktop} {
    padding: 32px 48px;
    height: 96px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
`;

export const MainPanel = styled(FlexContainer)`
  padding: 0;
  ${device.desktop} {
    width: 15vw;
  }
`;

export const UserPanel = styled(FlexContainer)`
  padding: 0;
  justify-content: flex-end;
  ${device.desktop} {
    width: 15vw;
  }
`;

export const MobileMenuBtn = styled.button`
  position: relative;
  height: 20px;
  width: 24px;
  margin-right: 15px;
  padding: 0;
  border: none;
  color: white;
  background-color: transparent;
  cursor: pointer;
  ${device.desktop} {
    display: none;
  }
`;

export const MobileMenuPanel = styled.div`
  position: fixed;
  background: linear-gradient(180deg, rgba(30, 27, 38, 0.56) 0%, rgba(30, 27, 38, 0.4) 100%);
  backdrop-filter: blur(48px);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  ${device.desktop} {
    display: none;
  }
`;
