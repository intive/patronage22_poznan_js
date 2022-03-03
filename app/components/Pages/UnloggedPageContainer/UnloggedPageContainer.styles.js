import styled from 'styled-components';
import { device } from 'consts/mediaQueries';
export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  background-color: #2a2535;
  ${device.tablet} {
    background-image: url('../images/background-image.jpg');
    background-position: left;
  }
  ${device.desktop} {
    background-position: top;
  }
`;

export const FormContainer = styled.div`
  padding-left: 20px;
  padding-top: 50px;
  ${device.tablet} {
    background-color: #2a2535;
    margin-right: 10px;
    padding: 0 50px;
    border-radius: 12px;
  }
  ${device.desktop} {
    margin-right: 50px;
    padding: 0px 100px;
  }
`;
export const Logo = styled.div`
  display: flex;
  height: 48px;
  width: 145px;
  justify-content: space-between;
`;
export const FormHeader = styled.div`
  width: 90vw;
  padding-left: 5vw;
  height: 100vh;
  color: white;
  ${device.tablet} {
    width: 340px;
    height: 600px;
    padding-top: 80px;
  }
  ${device.desktop} {
    width: 440px;
    height: 600px;
  }
`;
export const TabWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  line-height: 32px;
  color: white;
  width: 170px;
  padding-top: 40px;
`;
export const Underlined = styled.div`
  background-color: #44ec52;
  height: 2px;
  width: 65px;
  margin-top: 4px;
`;
