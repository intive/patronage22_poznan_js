import styled from 'styled-components';
import { device } from 'consts/mediaQueries';
export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #2a2535;
  color: white;
  ${device.tablet} {
    justify-content: flex-end;
    align-items: center;
    background-image: url('../images/hero-background-image.jpg');
    background-position: top left;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  width: 100%;
  ${device.tablet} {
    width: auto;
    margin-right: 10px;
    padding: 0 50px;
    background-color: #2a2535;
    border-radius: 12px;
  }
  ${device.desktop} {
    margin-right: 50px;
    padding: 0px 100px;
  }
`;
export const Form = styled.div`
  width: 55vw;
  min-width: 270px;
  max-height: 98vh;
  ${device.tablet} {
    width: 340px;
    height: 600px;
    padding-top: 30px;
  }
  ${device.desktop} {
    width: 440px;
    padding-top: 80px;
  }
`;
