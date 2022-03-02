import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

export const ListOfLinks = styled.ul`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns || '1fr 1fr'};
  column-gap: ${({ columnGap }) => columnGap || '3rem'};
  row-gap: ${({ rowGap }) => rowGap || '1.1rem'};
  padding-right: 2rem;
  color: ${({ color }) => color || '#5e5d5d'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  font-size: ${({ fontSize }) => fontSize || '0.9rem'};
  list-style-type: none;
  ${device.tablet} {
    grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns || '1fr 1fr 1fr 1fr'};
    column-gap: ${({ columnGap }) => columnGap || '2.3rem'};
  }
`;

export const LinkItem = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
