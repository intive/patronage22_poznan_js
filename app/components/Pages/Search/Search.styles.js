import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

export const MessageForUser = styled.p`
  color: #ffffff;
  font-size: 1.5rem;
  text-align: center;
  align-self: center;
`;

export const SearchWrapper = styled.section`
  background: #2a2535;
  min-height: 100vh;
  padding: 98px 2rem;
  display: flex;
  justify-content: center;

  ${device.desktop} {
    padding: 120px 3rem;
  }
`;
