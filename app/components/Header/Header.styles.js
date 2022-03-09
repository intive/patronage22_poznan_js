import styled from 'styled-components';
import { device } from '/app/consts/mediaQueries';

export const NavigationBar = styled.header`
  height: 52px;
  background: linear-gradient(180deg, #1e1b26 0%, rgba(30, 27, 38, 0) 100%);
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0 8px 12px;
  z-index: 999;
  ${device.tablet} {
    height: 72px;
    padding: 18px 0 10px 18px;
  }
  ${device.desktop} {
    padding: 32px 48px;
  }
`;
const div = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
`;
export const MainPanel = styled(div)`
  padding: 0;
`;

export const UserPanel = styled(div)`
  padding: 4px 0;
`;

const TransparentButton = styled.button`
  border: none;
  color: white;
  background-color: transparent;
  cursor: pointer;
`;

export const MobileMenuBtn = styled(TransparentButton)`
  position: relative;
  height: 20px;
  width: 24px;
  margin-right: 15px;
  padding: 0;
  ${device.desktop} {
    display: none;
  }
`;

export const UserImg = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 4px;
  margin-top: 5px;
  position: relative;
`;

export const MobileMenuPanel = styled.div`
  position: fixed;
  background: linear-gradient(180deg, rgba(30, 27, 38, 0.56) 0%, rgba(30, 27, 38, 0.4) 100%);
  backdrop-filter: blur(48px);
  left: 0;
  right: 0;
  height: 100vh;
  ${device.desktop} {
    display: none;
  }
`;
