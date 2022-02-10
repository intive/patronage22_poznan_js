import styled from 'styled-components';
import { media } from './mediaQuery';

export const NavigationBar = styled.header`
  background-color: rgba(30, 30, 41, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  ${media.tablets} {
    padding: 0 30px;
  }
`;
export const LogoName = styled.a`
  font-size: 35px;
  color: red;
  ${media.tablets} {
    font-size: 40px;
  }
`;
export const MainNavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const SecondNavigationBar = styled(MainNavigationBar)``;
export const MobileMenuBtn = styled.button`
  font-size: 14px;
  margin: 0 30px;
  border: none;
  color: white;
  background-color: transparent;
  text-transform: uppercase;
  ${media.tablets} {
    margin: 0 30px;
  }
  ${media.desktop} {
    display: none;
  }
`;
export const DesktopFormUl = styled.ul`
  display: none;
  ${media.desktop} {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0 40px;
  }
`;
export const UserImg = styled.span`
  background-color: black;
  color: white;
  padding: 8px;
  margin: 0 5px;
  ${media.tablets} {
    padding: 8px;
  }
`;
export const MobileFormUl = styled.ul`
  position: absolute;
  left: 5%;
  top: 50px;
  padding: 0;
  max-width: 70vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid white;
  ${media.tablets} {
    left: 4.5%;
    max-width: 45vw;
  }
`;
export const LinkStyle = styled.li`
  text-transform: uppercase;
  list-style: none;
  text-align: center;
  margin: 10px;
`;
export const DesktopLinkStyle = styled(LinkStyle)`
  margin: 0 10px;
`;
