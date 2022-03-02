import styled, { css } from 'styled-components';
import { device } from 'consts/mediaQueries';

const StyledButton = styled.button`
  font-size: 1rem;
  text-transform: capitalize;
  padding: 0.6rem 1.2rem;
  color: #000;
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
  width: ${({ fullWidth }) => fullWidth && '100%'};
  min-width: 130px;
  border: 1px solid #000;
  border-radius: 3px;
  line-height: 1.4;
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

  ${({ appended }) =>
    appended &&
    css`
      ${device.tablet} {
        font-size: 1.6rem;
        height: 60px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: 2px solid #333;
      }
    `}

  ${({ loader }) =>
    loader &&
    css`
       {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
`;

export default StyledButton;
