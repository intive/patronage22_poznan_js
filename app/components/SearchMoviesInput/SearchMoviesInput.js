import { useState, createRef } from 'react';
import {
  SearchMoviesContainer,
  SearchButton,
  SearchInput,
  ClearInputButton,
} from './searchMovieInputStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const SearchMoviesInput = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');

  const placeholder = {
    searchValue: 'Title, Actors, Film genre',
  };
  const inputRef = createRef();

  const closeIcon = <>&times;</>;
  const SearchIcon = <FontAwesomeIcon icon={faSearch} />;
  const containerWidth = isExpanded ? 300 : 30;
  const containerBackground = isExpanded ? 'rgba(0, 0, 0, 0.8)' : 'none';

  const openSearchInput = () => {
    setExpanded(!isExpanded);
    inputRef.current.focus();
  };

  return (
    <SearchMoviesContainer containerWidth={containerWidth} color={containerBackground}>
      <SearchButton onClick={openSearchInput}>{SearchIcon}</SearchButton>
      <SearchInput
        placeholder={placeholder.searchValue}
        value={searchInputValue}
        onChange={(e) => setSearchInputValue(e.target.value)}
        onBlur={() => setExpanded(false)}
        ref={inputRef}
      ></SearchInput>
      {searchInputValue.length > 0 && (
        <ClearInputButton onClick={() => setSearchInputValue('')}>{closeIcon}</ClearInputButton>
      )}
    </SearchMoviesContainer>
  );
};
