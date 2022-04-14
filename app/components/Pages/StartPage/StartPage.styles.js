import styled from 'styled-components';
import { device } from 'consts/mediaQueries';
import { Wrapper, FormContainer } from '../AuthPageContainer/AuthPageContainer.styles';

export const StartPageContainer = styled(Wrapper)`
  background-color: #381010;
  width: 100%;
  ${device.tablet} {
    background-image: url('images/initial-page-placeholder.jpg');
  }
`;

export const BackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  ${device.tablet} {
    min-height: 100vh;
    background-image: url('images/initial-page-background.jpg');
    background-position: top left;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Container = styled(FormContainer)`
  align-self: center;
  padding: 120px 50px;
  ${device.tablet} {
    align-self: flex-start;
    padding: 40px 20px 50px;
    margin-top: 150px;
    margin-left: 15px;
    background-color: #381010;
  }

  @media (min-width: 1220px) {
    align-self: flex-end;
    margin-top: 150px;
    margin-right: 20px;
    padding: 40px 50px 50px;
  }
`;

export const ContentContainer = styled.div`
  min-width: 200px;
  max-width: 500px;
  text-align: center;
  ${device.tablet} {
    width: 400px;
  }
`;

export const WelcomeHeader = styled.h1`
  padding-bottom: 40px;
  font-size: 3.2rem;
  letter-spacing: 0.7px;
  font-weight: 700;

  ${device.tablet} {
    font-size: 3.2rem;
    font-weight: 500;
  }
`;

export const WelcomeContent = styled.p`
  font-size: 2rem;
  line-height: 1.8;
  letter-spacing: 0.8px;
  padding-bottom: 50px;
  ${device.tablet} {
    font-size: 1.8rem;
  }
`;
