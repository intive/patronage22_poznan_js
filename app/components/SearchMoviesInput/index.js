import { useState, useRef } from 'react';
import useOnClickOutside from 'hooks/useOnClickOutside';
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
  const [isInputEmpty, setInputEmpty] = useState(true);

  const placeholder = {
    searchValue: 'Title, Actors, Film genre',
  };
  const inputRef = useRef();

  const closeIcon = <>&times;</>;
  const SearchIcon = <FontAwesomeIcon icon={faSearch} />;

  const containerRef = useRef();

  useOnClickOutside(containerRef, () => (!isInputEmpty ? setExpanded(true) : setExpanded(false)));

  const openSearchInput = () => {
    setExpanded(!isExpanded);
    if (!isExpanded) {
      inputRef.current.focus();
    }
  };

  const handleInputchange = (e) => {
    const value = e.target.value;
    setSearchInputValue(value);
    value.length > 0 ? setInputEmpty(false) : setInputEmpty(true);
  };

  const clearInputValue = () => {
    setSearchInputValue('');
    setInputEmpty(true);
  };

  return (
    <SearchMoviesContainer isExpanded={isExpanded} ref={containerRef}>
      <SearchButton onClick={openSearchInput}>{SearchIcon}</SearchButton>
      <SearchInput
        placeholder={placeholder.searchValue}
        value={searchInputValue}
        onChange={(e) => handleInputchange(e)}
        ref={inputRef}
      ></SearchInput>
      {!isInputEmpty && <ClearInputButton onClick={clearInputValue}>{closeIcon}</ClearInputButton>}
    </SearchMoviesContainer>
  );
};
