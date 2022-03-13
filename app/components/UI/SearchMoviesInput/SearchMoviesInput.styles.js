import styled from 'styled-components';

export const SearchMoviesContainer = styled.div`
  display: flex;
  margin-right: 20px;
  width: ${({ isExpanded }) => (isExpanded ? '210px' : '20px')};
  transition: width 0.3s ease-in-out;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  border: none;
  border-bottom: 2px solid #fff;
  background: none;
  color: #fff;
  padding: 0.5rem 0;
  font-size: 1rem;
  margin-left: 12px;
  width: 160px;
  margin-right: 10px;
  :focus {
    outline: none;
    border-bottom-color: #44ec52;
  }
  ::placeholder {
    color: #cecece;
  }
  :not([value='']) {
    margin-right: 0px;
  }
`;
