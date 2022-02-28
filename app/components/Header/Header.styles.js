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
  padding: 0.5rem 1rem;
  ${device.tablet} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const MainNavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  ${device.tablet} {
    height: 50px;
  }
`;

export const UserPanel = styled(MainNavigationBar)``;

const TransparentButton = styled.button`
  border: none;
  color: white;
  background-color: transparent;
`;

export const MobileMenuBtn = styled(TransparentButton)`
  font-size: 0.9rem;
  margin: 0 20px;
  padding: 0;
  text-transform: uppercase;
  ${device.tablet} {
    margin: 0 30px;
    font-size: 1.1rem;
  }
  ${device.desktop} {
    display: none;
  }
`;

export const UserImg = styled.div`
  background-color: black;
  color: white;
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 4px;
  margin: 0 5px;
  ${device.tablet} {
    height: 50px;
    width: 50px;
    line-height: 50px;
  }
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
