import styled, { css } from 'styled-components';

const StyledIcon = styled.span`
  border-radius: 3px;
  display: flex;

  color: #000;
  background-color: #fff;

  ${({ customBackground }) =>
    customBackground &&
    css`
      background-color: ${({ customBackground }) => customBackground || '#fff'};
    `}
  ${({ blackBackground }) =>
    blackBackground &&
    css`
      color: #fff;
      background-color: #000;
    `}
`;

export default StyledIcon;
