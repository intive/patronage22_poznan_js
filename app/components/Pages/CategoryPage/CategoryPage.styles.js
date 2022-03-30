import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

export const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-width: 20%;
  justify-content: center;
  padding: 0 50px;

  ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    column-width: 30%;
  }
  ${device.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-width: 50%;
  }
`;

export const MovieCardWrapper = styled.div`
  width: 70%;
  height: 400px;
  margin: 0 auto;
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
    font-size: 18px;
    color: #fff;
    padding: 1px 3px;
    outline: none;
  }
`;
