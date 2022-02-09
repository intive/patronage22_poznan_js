import styled from "styled-components";

const SearchContainer = styled.header`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 2px;
  margin: 0 auto;
  border: solid 1px rgba(0, 0, 0, 0.8);
  transition: width 0.3s ease-in-out;
  overflow: hidden;
`;
const SearchButton = styled.button`
  display: inline-block;
  background: none;
  outline: none;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  cursor: pointer;
  border: none;
`;
const SearchInput = styled.input`
  padding: 5px;
  height: 20px;
  width: 80%;
  border: none;
  background: none;
  &:focus {
    outline: none;
  }
`;

const ClearInputButton = styled(SearchButton)`
  font-weight: 600;
`;

export { SearchContainer, SearchButton, SearchInput, ClearInputButton };
