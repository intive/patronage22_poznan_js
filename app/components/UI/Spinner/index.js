import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
from {
  transform: rotate(0deg)
}
to {
  transform: rotate(360deg)
}`;

const Spinner = styled.span`
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-left: 4px solid;
  animation: ${rotate} 1s linear infinite;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: inline-block;
`;

export default Spinner;
