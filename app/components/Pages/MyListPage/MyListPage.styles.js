import styled from 'styled-components';

export const MyListWrapper = styled.div`
  background: #000;
  min-height: 100vh;
`;

export const WrapperGrid = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const SearchDiv = styled.div`
  height: 160px;
  margin: 0 auto;
  max-width: 90vw;
`;

export const SearchStyle = styled.form`
  position: relative;
  width: 100%;
  padding-top: 120px;

  input {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 6px;
    font-size: 1.125rem;
    color: #fff;
    padding: 1px 3px;
    outline: none;
    text-indent: 15px;
  }
`;

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
  min-height: 100vh;
  background: #000;
  color: #fff;
`;

export const NoMovieError = styled.h2`
  margin: 0 auto;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
  min-height: 100px;
  color: #fff;
`;

export const MyListTitle = styled.h1`
  margin: 0 auto;
  font-size: 1.5rem;
  color: #fff;
`;
