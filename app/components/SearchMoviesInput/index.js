import { useState, createRef, useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import {
  SearchMoviesContainer,
  SearchButton,
  SearchInput,
  ClearInputButton,
} from './SearchMoviesInput.styles';
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

  const ref = useRef();

  useOnClickOutside(ref, () =>
    searchInputValue.length !== 0 ? setExpanded(true) : setExpanded(false)
  );

  const openSearchInput = () => {
    setExpanded(!isExpanded);
    inputRef.current.focus();
  };

  return (
    <SearchMoviesContainer isExpanded={isExpanded} ref={ref}>
      <SearchButton onClick={openSearchInput}>{SearchIcon}</SearchButton>
      <SearchInput
        placeholder={placeholder.searchValue}
        value={searchInputValue}
        onChange={(e) => setSearchInputValue(e.target.value)}
        ref={inputRef}
      ></SearchInput>
      {searchInputValue.length > 0 && (
        <ClearInputButton onClick={() => setSearchInputValue('')}>{closeIcon}</ClearInputButton>
      )}
    </SearchMoviesContainer>
  );
};
