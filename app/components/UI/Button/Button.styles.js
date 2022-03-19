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
    opacity: 0.5;
    background-color: #ffffff;
    color: #1f1d2b;
    cursor: not-allowed;
  }

  ${({ primary }) =>
    primary &&
    css`
      backdrop-filter: none;
      border: none;
      background-color: #ffffff;
      color: #1f1d2b;
      border-radius: 12px;
      padding: 1rem 4rem;
    `}

  ${({ onlyIcon, iconWithBg }) =>
    (onlyIcon || iconWithBg) &&
    css`
       {
        backdrop-filter: none;
        border: none;
        box-shadow: none;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}

    ${({ onlyIcon }) =>
    onlyIcon &&
    css`
       {
        background-color: unset;
        padding: 0;
      }
    `}

    ${({ iconWithBg }) =>
    iconWithBg &&
    css`
       {
        background-color: #272233;
        border-radius: 50%;
        padding: ${({ padding }) => padding || '1rem'};
        width: 32px;
        height: 32px;
        ${device.tablet} {
          width: 48px;
          height: 48px;
        }
      }
    `}
`;

export default StyledButton;
