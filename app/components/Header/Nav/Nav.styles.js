import styled from 'styled-components';
import { device } from '/app/consts/mediaQueries';

export const DesktopMenuList = styled.ul`
  display: none;
  ${device.desktop} {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0 40px;
  }
`;

export const MobileMenuList = styled.ul`
  position: absolute;
  left: 10px;
  top: 60px;
  padding: 0;
  margin: 0;
  max-width: 85vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid white;
  ${device.tablet} {
    top: 70px;
    max-width: 57vw;
  }
  ${device.desktop} {
    display: none;
  }
`;

export const LinkStyle = styled.li`
  text-transform: uppercase;
  list-style: none;
  text-align: center;
  margin: 15px;
  a {
    font-size: 1.2rem;
  }
`;

export const LinkWrapper = styled.span`
  display: block;
  color: white;
  a {
    display: inherit;
  }
`;
