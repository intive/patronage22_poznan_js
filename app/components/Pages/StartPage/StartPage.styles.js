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
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;
  width: 100%;

  ${device.tablet} {
    background-image: url('images/initial-page-background.jpg');
    background-position: top left;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Container = styled(FormContainer)`
  align-self: center;
  margin-top: 120px;
  ${device.tablet} {
    align-self: flex-start;
    padding: 40px 20px 80px;
    margin-top: 210px;
    margin-left: 15px;
    background-color: #381010;
  }

  @media (min-width: 1500px) {
    align-self: flex-end;
    margin-top: 150px;
    margin-right: 10px;
    padding: 80px 70px 100px;
  }
`;

export const ContentContainer = styled.div`
  min-width: 200px;
  max-width: 100%;
  text-align: center;

  ${device.tablet} {
    width: 400px;
  }
  ${device.desktop} {
    width: 450px;
  }
`;

export const WelcomeHeader = styled.p`
  padding-bottom: 50px;
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

  ${device.tablet} {
    font-size: 1.8rem;
  }
`;

export const SignUpLink = styled.a`
  padding-left: 10px;
  font-weight: 700;
  color: #616161;
`;
