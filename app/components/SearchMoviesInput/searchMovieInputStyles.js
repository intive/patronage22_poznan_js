import styled from 'styled-components';
import { device } from '/app/consts/mediaQueries';

export const SearchMoviesContainer = styled.header`
  width: ${(props) => `${props.containerWidth}px`};
  display: none;
  justify-content: left;
  align-items: center;
  padding: 2px;
  margin-right: 10px;
  background: ${(props) => props.color};
  transition: width 0.3s ease-in-out;
  overflow: hidden;
  ${device.tablet} {
    display: flex;
  }
`;
export const SearchButton = styled.button`
  display: inline-block;
  padding: 2px;
  background: none;
  outline: none;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  cursor: pointer;
  border: none;
  font-size: 1.1rem;
  color: #fff;
`;
export const SearchInput = styled.input`
  height: 20px;
  width: 70%;
  border: none;
  background: none;
  color: #fff;
  &:focus {
    outline: 1px solid #ffffff50;
  }
`;
export const ClearInputButton = styled(SearchButton)`
  margin: 0;
`;
