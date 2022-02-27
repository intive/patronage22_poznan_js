import styled from 'styled-components';

export const StyledBtn = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor || 'rgb(0, 0, 0, 0.2)'};
  color: ${({ color }) => color || '#fff'};
  font-size: 20px;
  border: none;
  position: absolute;
  left: ${({ left }) => (left ? 0 : 'auto')};
  right: ${({ right }) => (right ? 0 : 'auto')};
  top: 0;
  bottom: 0;
  width: 40px;
  height: 100px;
  margin: 0 auto;
  cursor: pointer;
`;
