import styled from 'styled-components';
import Button from 'components/Button';
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
      url('../UserLoginBackgroundImg.jpg');
  }
`;

export const FormContainer = styled.div`
  width: 22rem;
  padding: 4rem 3rem 8rem;
  color: rgb(255, 255, 255);
  ${device.tablet} {
    padding-top: 5vh;
    background-color: rgb(0, 0, 0, 0.5);
  }
`;

export const FormHeader = styled.h1`
  padding-bottom: 0.8rem;
  font-weight: 600;
`;

export const SignInButton = styled(Button)`
  display: inline-block;
  width: 100%;
  margin-top: 0.8rem;
  padding: 0.8rem;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  font-size: 0.8rem;
  opacity: 0.5;
  cursor: pointer;
`;
export const CheckboxContainer = styled.div``;

export const SignUpLinkParagraph = styled.p`
  color: #5e5d5d;
  font-weight: 600;
`;

export const SignUpLink = styled.a`
  margin-left: 3px;
  color: #ffffff;
`;
