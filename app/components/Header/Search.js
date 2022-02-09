import { useState } from 'react';
import { SearchMoviesContainer, SearchButton, SearchInput, ClearInputButton } from './searchStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchMoviesInput() {
  const [buttonState, setButtonState] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');

  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const closeIcon = 'X';

  return (
    <SearchMoviesContainer style={buttonState ? { width: 300 } : { width: 30 }}>
      {buttonState && (
        <>
          <SearchButton onClick={() => setButtonState(!buttonState)}>{searchIcon}</SearchButton>
          <SearchInput
            placeholder="Title, Actors, Film genre"
            value={searchInputValue}
            onChange={(e) => setSearchInputValue(e.target.value)}
          ></SearchInput>
          {searchInputValue.length > 0 ? (
            <ClearInputButton onClick={() => setSearchInputValue(' ')}>
              {closeIcon}
            </ClearInputButton>
          ) : null}
        </>
      )}
      {buttonState ? null : (
        <SearchButton onClick={() => setButtonState(!buttonState)}>{searchIcon}</SearchButton>
      )}
    </SearchMoviesContainer>
  );
}
