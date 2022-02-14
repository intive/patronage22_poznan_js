import styled from 'styled-components';
import { PrimaryButton } from 'components/Button';
import { device } from 'consts/mediaQueries';

export const LoginPageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  height: 100vh;
  background-image: url('../UserLoginBackgroundImg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const LayerWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: -1;
`;

export const Header = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  color: rgb(255, 255, 255);
  background-color: #000000;
  ${device.tablet} {
    width: 24rem;
    height: 32rem;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const FormContainer = styled.div`
  margin-top: 5vh;
`;

export const FormHeader = styled.h1`
  width: 17rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputStyle = styled.input`
  margin-bottom: 1.4rem;
  padding-left: 10px;
  width: 17rem;
  height: 3rem;
  border-radius: 5px;
  border-color: black;
  background-color: #ffffff;
  letter-spacing: 0.3px;
  ${device.tablet} {
    width: 16rem;
  }
`;
export const ErrorMessage = styled.div`
  margin-top: -1.5rem;
  height: 1.5rem;
  color: red;
`;

export const Button = styled(PrimaryButton)`
  width: 17rem;
  height: 3rem;
  cursor: pointer;
  ${device.tablet} {
    width: 16rem;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 17rem;
  color: #ffffff;
  font-size: 0.8rem;
`;

export const Checkbox = styled.input`
  opacity: 0.5;
`;
