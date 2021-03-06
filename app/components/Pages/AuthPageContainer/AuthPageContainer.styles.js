import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background-color: #2a2535;
  color: #fff;

  ${device.tablet} {
    justify-content: flex-end;
    align-items: center;
    background-image: url('images/hero-background-image.jpg'),
      url('images/placeholder-auth-container.jpg');
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
    z-index: 1;
  }

  ${device.desktop} {
    margin-right: 50px;
    padding: 75px 100px;
  }
`;
