import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

export const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  padding: 0 50px;
  background: linear-gradient(180deg, rgba(32, 32, 32, 0) 0%, #1e1b26 13%, #1e1b26 100%);

  ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${device.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const MovieCardWrapper = styled.div`
  width: 70%;
  margin: 20px auto;
`;

export const SearchDiv = styled.div`
  height: 200px;
  margin: 0 auto;
  max-width: 90vw;
`;

export const SearchStyle = styled.form`
  position: relative;
  width: 100%;
  padding-top: 100px;

  input {
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 6px;
    background: #000;
    font-size: 1.125rem;
    color: #fff;
    padding: 1px 3px;
    outline: none;
  }
`;

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(32, 32, 32, 0) 0%, #1e1b26 13%, #1e1b26 100%);
  color: white;
`;

export const NoMovieError = styled.h2`
  margin: 0 auto;
`;
