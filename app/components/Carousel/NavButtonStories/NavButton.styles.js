import styled from 'styled-components';

export const StyledBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  font-size: 20px;
  border: none;
  position: absolute;
  left: ${(props) => (props.left === true ? 0 : 'auto')};
  right: ${(props) => (props.right === true ? 0 : 'auto')};
  top: 0;
  bottom: 0;
  width: 40px;
  height: 100px;
  cursor: pointer;
`;
