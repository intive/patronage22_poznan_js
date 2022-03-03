import styled, { css } from 'styled-components';
import { device } from 'consts/mediaQueries';

const StyledButton = styled.button`
  font-size: 1rem;
  line-height: 1.5;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 8px;
  background-color: ${({ backgroundColor }) => backgroundColor || 'rgba(30,27,38,0.24)'};
  box-shadow: 0px 6px 20px -2px rgb(26 26 26 / 14%), 0px 4px 6px rgb(26 26 26 / 6%);
  backdrop-filter: blur(2px);
  width: ${({ fullWidth }) => fullWidth && '100%'};
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${device.tablet} {
    padding: 1rem 4rem;
  }

  :disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  ${({ primary }) =>
    primary &&
    css`
      backdrop-filter: none;
      background: #ffffff;
      color: #1f1d2b;
      border-radius: 12px;
    `}

  ${({ onlyIcon, iconWithBg }) =>
    (onlyIcon || iconWithBg) &&
    css`
       {
        backdrop-filter: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;

        ${device.tablet} {
          svg {
            font-size: 2rem;
          }
        }
      }
    `}

    ${({ onlyIcon }) =>
    onlyIcon &&
    css`
       {
        padding: 0;
        svg {
          font-size: 1.6rem;
        }
      }
    `}

    ${({ iconWithBg }) =>
    iconWithBg &&
    css`
       {
        background: #1e1b26;
        border-radius: 50%;
        padding: 1rem;
        width: 32px;
        height: 32px;
        svg {
          font-size: 1.2rem;
        }
        ${device.tablet} {
          width: 48px;
          height: 48px;
        }
      }
    `}
`;

export default StyledButton;
