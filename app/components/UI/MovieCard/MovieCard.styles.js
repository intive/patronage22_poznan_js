import styled from 'styled-components';

export const StyledMovieCard = styled.button`
  /* Figma - Tile XL */

  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: static;
  height: 376px;
  left: 0px;
  top: 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 12px;
`;

export const StyledMovieCardTitleWrapper = styled.div`
  /* Figma - Title */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px;
  position: static;
  height: 56px;
  left: 0px;
  top: 320px;
  filter: drop-shadow(0px 2px 8px rgba(32, 37, 50, 0.08))
    drop-shadow(0px 2px 4px rgba(32, 37, 50, 0.03));
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px;
`;

export const StyledMovieCardTitle = styled.p`
  position: static;
  height: 40px;
  left: 8px;
  top: 8px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 1;
  margin: 0px 8px;
`;
