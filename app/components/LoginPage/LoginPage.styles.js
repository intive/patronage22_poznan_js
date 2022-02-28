import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 100px;
  background-image: none;
  background-color: rgb(0, 0, 0);
  ${device.tablet} {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url('../images/background-movies.jpeg');
  }
`;
