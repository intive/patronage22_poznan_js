import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

export const GridWrapper = styled.div`
  display: grid;
  grid: auto-flow / repeat(4, 1fr);
  width: 100%;
  padding: 1em 0;

  ${device.tablet} {
    grid: auto-flow / repeat(5, 1fr);
  }

  ${device.desktop} {
    grid: auto-flow / repeat(10, 1fr);
  }
`;
