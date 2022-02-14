import { useState } from 'react';
import { SearchMoviesContainer, SearchButton, SearchInput, ClearInputButton } from './searchStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchMoviesInput() {
  const [isExpanded, setButtonState] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');

  const placeholder = {
    searchValue: 'Title, Actors, Film genre',
  };

  const closeIcon = <>&times;</>;
  const SearchIcon = <FontAwesomeIcon icon={faSearch} />;
  const containerWidth = isExpanded ? 300 : 30;

  return (
    <SearchMoviesContainer containerWidth={containerWidth}>
      <SearchButton onClick={() => setButtonState(!isExpanded)}>{SearchIcon}</SearchButton>
      <SearchInput
        placeholder={placeholder.searchValue}
        value={searchInputValue}
        onChange={(e) => setSearchInputValue(e.target.value)}
      ></SearchInput>
      {searchInputValue.length > 0 && (
        <ClearInputButton onClick={() => setSearchInputValue('')}>{closeIcon}</ClearInputButton>
      )}
    </SearchMoviesContainer>
  );
}
