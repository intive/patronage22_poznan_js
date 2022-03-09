import styled, { css } from 'styled-components';
import { device } from 'consts/mediaQueries';

export const CreateAccountBackground = styled.div`
  min-height: 100vh;
  background-color: ${({ isLayoutLight }) => (isLayoutLight ? '#fff' : '#000')};
`;

export const CreateAccountWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 85vh;

  ${({ isLayoutLight }) =>
    isLayoutLight
      ? css`
          background: white;
          color: #000;
          border-bottom: none;
        `
      : css`
          // background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),
          //   url('../images/background-movies.jpeg');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          border-bottom: 8px solid #222;
          color: #fff;
        `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0.5;
  max-width: 500px;
  padding: 8rem 1.5rem 6rem;
  text-align: center;
  ${device.tablet} {
    max-width: 700px;
  }
`;

export const HeadingPrimary = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  ${device.tablet} {
    font-size: 3rem;
  }
`;

export const HeadingSecondary = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 2rem;
  ${device.tablet} {
    font-size: 1.7rem;
  }
`;

export const FormTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  margin-bottom: 1rem;
  ${device.tablet} {
    font-size: 1.2rem;
  }
`;

export const InputAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${device.tablet} {
    ${({ flexColumnMobileOnly }) =>
      flexColumnMobileOnly &&
      css`
        flex-direction: row;
        align-items: start;
      `};
    max-width: 540px;
    margin: 0 auto;
  }
`;
