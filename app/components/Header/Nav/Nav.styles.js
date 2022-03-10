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
  margin: 10px 16px;
  a {
    color: white;
  }
  ${device.desktop} {
    margin: 0 23px;
    height: 20px;
  }
`;
