import styled from 'styled-components';
import { device } from '/app/consts/mediaQueries';

export const MenuList = styled.ul`
  display: ${({ displayView }) => displayView || 'none'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  margin: ${({ margin }) => margin || '60px 20px'};
  padding: ${({ padding }) => padding || '0'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  line-height: 24px;
  list-style-type: none;
  li:first-child {
    display: none;
  }
  ${device.desktop} {
    display: ${({ displayView }) => displayView || 'flex'};
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
