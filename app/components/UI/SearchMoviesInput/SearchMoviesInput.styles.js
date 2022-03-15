import styled from 'styled-components';
import Button from 'components/UI/Button';

export const SearchMoviesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: ${({ isExpanded }) => (isExpanded ? '210px' : '30px')};
  transition: width 0.3s ease-in-out;
  overflow: hidden;
  margin-right: 10px;
`;

export const SearchInput = styled.input`
  border: none;
  border-bottom: 2px solid #fff;
  background: none;
  color: #fff;
  padding: 0.5rem 0;
  font-size: 1rem;
  width: 80%;
  :focus {
    outline: none;
    border-bottom-color: #44ec52;
  }
  ::placeholder {
    color: #cecece;
  }
`;

export const SearchButton = styled(Button)`
  margin-right: 10px;
`;
