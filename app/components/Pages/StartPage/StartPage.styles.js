import styled from 'styled-components';
import { device } from 'consts/mediaQueries';
import { Wrapper, FormContainer } from '../AuthPageContainer/AuthPageContainer.styles';

export const StartPageContainer = styled(Wrapper)`
  background-color: #381010;
  ${device.tablet} {
    background-image: url('images/initial-page-background.jpg');
  }
`;

export const BackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;
  min-width: 100vw;

  ${device.tablet} {
    position: absolute;
    background-image: url('images/initial-page-background.jpg');
    background-position: top left;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Logo = styled.div`
  position: relative;
  margin-left: 40px;
  margin-top: 5px;
  width: clamp(70px, 10vw, 100px);
  height: 120px;
`;

export const Container = styled(FormContainer)`
  align-self: center;
  margin-top: 100px;
  position: absolute;
  ${device.tablet} {
    align-self: flex-start;
    padding: 100px 30px;
    margin-top: 180px;
    margin-left: 15px;
    background-color: #381010;
  }

  @media (min-width: 1350px) {
    align-self: flex-end;
    margin-right: 15px;
    margin-top: 100px;
    padding: 80px 70px 100px;
  }
`;

export const ContentContainer = styled.div`
  min-width: 200px;
  max-width: 100%;
  text-align: center;

  ${device.tablet} {
    width: 450px;
  }
`;

export const WelcomeHeader = styled.p`
  padding-bottom: 50px;
  // width: 100%;
  font-size: 2.8rem;
  letter-spacing: 0.7px;
  font-weight: 700;

  ${device.tablet} {
    font-size: 3rem;
    font-weight: 500;
  }
`;

export const WelcomeContent = styled.p`
  // width 100%;
  font-size: 1.5rem;
  line-height: 1.8;
  letter-spacing: 0.8px;

  ${device.tablet} {
    font-size: 1.8rem;
  }
`;

export const SignUpLink = styled.a`
  padding-left: 10px;
  color: #575655;
  font-weight: 700;
`;
