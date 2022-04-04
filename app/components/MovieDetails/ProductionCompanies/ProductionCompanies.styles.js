import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

export const Production = styled.section`
  display: none;
  ${device.desktop} {
    display: block;
    h2 {
      font-size: 1.7rem;
      line-height: 1.7rem;
    }
  }
`;
export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;
  ${device.desktop} {
    margin: 5px 0;
  }
`;

export const StyledItem = styled.li`
  padding: 5px 10px;
  font-size: 0.9rem;
  list-style: none;
  ${device.tablet} {
    font-size: 1.2rem;
  }
  ${device.desktop} {
    padding: 2px 0;
  }
`;
