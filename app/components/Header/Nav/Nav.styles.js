import styled from 'styled-components';
import { device } from '/app/consts/mediaQueries';

export const MenuList = styled.ul`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  background-color: ${({ backGroundColor }) => backGroundColor || 'black'};
  margin: 60px 16px;
  padding: 0;
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  line-height: 24px;
  list-style-type: none;
  li:first-child {
    display: none;
  }
  ${device.desktop} {
    margin: 0;
    li:first-child {
      display: block;
    }
  }
`;

export const LinkStyle = styled.li`
  text-transform: capitalize;
  text-align: center;
  margin: 10px 16px;
  a {
    color: white;
    font-size: 20px;
    font-weight: 500;
  }
  ${device.desktop} {
    margin: 0 28px;
    height: 32px;
    line-height: 32px;
  }
`;
