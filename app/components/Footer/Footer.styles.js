import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

export const FooterWrapper = styled.footer`
  display: grid;
  justify-content: flex-start;
  width: 100%;
  color: ${({ color }) => color || '#5e5d5d'};
  background-color: ${({ backgroundColor }) => backgroundColor || '#000000'};
  font-weight: 600;
  ${device.tablet} {
    justify-content: center;
  }
`;

export const CopyrightParagraph = styled.p`
  margin-left: 2.4rem;
  margin-top: 2rem;
  font-size: 0.8rem;
`;
