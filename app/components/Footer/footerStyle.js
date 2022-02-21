import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

export const FooterWrapper = styled.footer`
  display: grid;
  justify-content: flex-start;
  width: 100%;
  font-weight: 600;
  color: #5e5d5d;
  background-color: #000000;
  ${device.tablet} {
    justify-content: center;
  }
`;

export const IconList = styled.ul`
  display: flex;
  margin-left: 0.4rem;
  margin-top: 4rem;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  color: #ffffff;
  list-style-type: none;
`;

export const IconWrapper = styled.li`
  margin-right: 2rem;
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }
`;

export const LinksList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  row-gap: 1.1rem;
  font-size: 0.9rem;
  list-style-type: none;
  ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 2.3rem;
  }
`;

export const LinkItem = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const CopyrightParagraph = styled.p`
  font-size: 0.8rem;
  margin-left: 2.4rem;
  margin-top: 2rem;
`;
