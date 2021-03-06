import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

export const StyledMovieGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  align-content: start;

  ${device.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${device.desktop} {
    grid-template-columns: repeat(6, 1fr);
  }
`;
