import styled from 'styled-components';
import { device } from '/app/consts/mediaQueries';

export const NavigationBar = styled.header`
  background-color: rgba(30, 30, 41, 0.7);
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 10px;
  ${device.tablet} {
    padding: 4px 30px;
  }
`;

export const MainNavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserPanel = styled(MainNavigationBar)``;

const TransparentButton = styled.button`
  border: none;
  color: white;
  background-color: transparent;
`;

export const MobileMenuBtn = styled(TransparentButton)`
  font-size: 0.7rem;
  margin: 0 30px;
  text-transform: uppercase;
  ${device.tablet} {
    font-size: 0.9rem;
  }
  ${device.desktop} {
    display: none;
  }
`;

export const DesktopMenuList = styled.ul`
  display: none;
  ${device.desktop} {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0 40px;
  }
`;

export const UserImg = styled.div`
  background-color: black;
  color: white;
  height: 30px;
  width: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 4px;
  margin: 0 5px;
  ${device.tablet} {
    height: 40px;
    width: 40px;
    line-height: 40px;
  }
`;

export const MobileMenuList = styled.ul`
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
  ${device.tablet} {
    left: 4.5%;
    max-width: 45vw;
  }
  ${device.desktop} {
    display: none;
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

export const ShowAccount = styled(TransparentButton)`
  margin: 0;
  padding: 0;
  display: none;

  ${device.tablet} {
    display: block;
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const LinkWrapper = styled.span`
  display: block;
  color: white;
  a {
    display: inherit;
  }
`;
