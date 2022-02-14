import styled from 'styled-components';

export const SearchMoviesContainer = styled.header`
  width: ${(props) => `${props.containerWidth}px`};
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 2px;
  margin: 0 auto;
  border: solid 1px rgba(0, 0, 0, 0.8);
  transition: width 0.3s ease-in-out;
  overflow: hidden;
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
`;
export const SearchInput = styled.input`
  height: 20px;
  width: 70%;
  border: none;
  background: none;
  &:focus {
    outline: 1px solid #00000050;
  }
`;
export const ClearInputButton = styled(SearchButton)`
  margin: 0;
`;
