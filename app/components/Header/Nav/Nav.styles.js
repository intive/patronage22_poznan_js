import styled from 'styled-components';
import { device } from '/app/consts/mediaQueries';

export const MenuList = styled.ul`
  display: ${({ displayView }) => displayView || 'none'};
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
  ${device.tablet} {
    margin: 100px 16px;
  }
  ${device.desktop} {
    display: ${({ displayView }) => displayView || 'flex'};
    margin: 0;
    li:first-child {
      display: block;
    }
  }
`;

export const LinkStyle = styled.li`
  text-transform: capitalize;
  text-align: center;
  margin: 14px 16px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  a {
    color: white;
  }
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
