import styled from 'styled-components';
import { device } from '/app/consts/mediaQueries';

export const DesktopList = styled.ul`
  display: none;

  ${device.desktop} {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    list-style-type: none;
  }
`;

export const MobileList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 60px 16px;
  padding: 0;
  list-style-type: none;
  li:first-child {
    display: none;
  }
  ${device.tablet} {
    margin: 100px 16px;
  }
`;
export const LinkStyle = styled.li`
  text-transform: capitalize;
  text-align: center;
  margin: 14px 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: white;

  ${device.tablet} {
    font-size: 18px;
    line-height: 28px;
  }
  ${device.desktop} {
    margin: 0 28px;
    font-size: 20px;
    line-height: 32px;
  }
`;
