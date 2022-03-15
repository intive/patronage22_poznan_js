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
  padding: 20px;
  min-width: 375px;
  ${device.tablet} {
    margin-right: 10px;
    padding: 50px;
    background-color: inherit;
    border-radius: 12px;
  }

  ${device.desktop} {
    margin-right: 50px;
    padding: 75px 100px;
  }
`;
