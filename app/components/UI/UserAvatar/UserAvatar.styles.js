import styled from 'styled-components';
import { css } from 'styled-components';

export const Avatar = styled.div`
  display: inline-block;
  position: relative;
  border: none;
  border-radius: 50%;
  background: transparent;
  min-width: 40px;
  min-height: 40px;
  max-width: 200px;
  max-height: 200px;

  ${({ size }) =>
    size &&
    css`
      width: ${size}px;
      height: ${size}px;
    `}

  ${({ blank }) =>
    blank &&
    css`
      background-color: #fff;
      border: 2px dashed #000;
    `}

    ${({ selected }) =>
    selected &&
    css`
      border: none;
      outline: 3px solid #44ec52;
    `}
`;
