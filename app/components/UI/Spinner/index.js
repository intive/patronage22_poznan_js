import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
from {
  transform: rotate(0deg)
}
to {
  transform: rotate(360deg)
}`;

const Spinner = styled.span`
  border: 4px solid #e6e6e6;
  border-left: 4px solid;
  border-radius: 50%;
  color: #c2c2c2;
  animation: ${rotate} 1s linear infinite;
  width: 24px;
  height: 24px;
  display: inline-block;
`;

export default Spinner;
