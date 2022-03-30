import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

export const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-width: 30%;
  padding: 0 50px;
  /* ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    column-width: 30%;
  } */
  // changes column grid to 3 on responsive mode
`;

export const MovieCardWrapper = styled.div`
  width: 80%;
  height: 500px;
`;

export const SearchDiv = styled.div`
  height: 200px;
  margin: 0 auto;
  max-width: 90vw;
`;

export const SearchStyle = styled.form`
  margin: 0rem 1rem;
  position: relative;
  width: 100%;
  padding-top: 30px;
  input {
    width: 100%;
    border: none;
    background: black;
    font-size: 24px;
    color: #fff;
    padding: 1px 3px;
    outline: none;
  }
`;
