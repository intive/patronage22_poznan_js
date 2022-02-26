import styled, { css } from 'styled-components';
import { device } from 'consts/mediaQueries';

export const SearchMoviesContainer = styled.header`
  display: none;
  justify-content: left;
  align-items: center;
  padding: 2px;
  margin-right: 10px;
  background: none;
  width: 30px;
  transition: width 0.3s ease-in-out;
  overflow: hidden;

  ${({ isExpanded }) =>
    isExpanded &&
    css`
      width: 300px;
      background: rgba(0, 0, 0, 0.8);
    `}

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

export const SearchIconContainer = styled(SearchButton)``;

export const SearchInput = styled.input`
  height: 20px;
  width: 70%;
  border: none;
  background: none;
  color: #fff;
  :focus {
    outline: 1px solid #ffffff50;
  }
`;
export const ClearInputButton = styled(SearchButton)`
  margin: 0;
`;
