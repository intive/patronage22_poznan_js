import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  font-size: 1rem;
  text-transform: capitalize;
  padding: 0.6rem 1.2rem;
  color: #000;
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
  border: 1px solid #000;
  border-radius: 3px;
  white-space: nowrap;
  text-align: center;

  :disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  ${({ primary }) =>
    primary &&
    css`
      color: #fff;
      background-color: #db0510;
      border: none;
    `}
`;

export default StyledButton;
