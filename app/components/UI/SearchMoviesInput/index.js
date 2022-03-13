import { useState, useRef, useEffect } from 'react';
import useOnClickOutside from 'hooks/useOnClickOutside';
import { SearchMoviesContainer, SearchInput } from './SearchMoviesInput.styles';
import Button from 'components/UI/Button';
import Icon from 'components/Icon';
import PropTypes from 'prop-types';

export default function SearchMoviesInput() {
  const [isExpanded, setExpanded] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');

  const inputRef = useRef();
  const containerRef = useRef();

  useOnClickOutside(containerRef, () =>
    searchInputValue ? setExpanded(true) : setExpanded(false)
  );

  const toggleOpenSearchInput = () => {
    if (searchInputValue) return;
    setExpanded(!isExpanded);
  };

  const handleInputchange = (event) => {
    const value = event.target.value;
    setSearchInputValue(value);
  };

  const clearInputValue = () => {
    setSearchInputValue('');
  };

  useEffect(() => {
    if (isExpanded) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  return (
    <SearchMoviesContainer isExpanded={isExpanded} ref={containerRef}>
      <Button onlyIcon onClick={toggleOpenSearchInput}>
        <Icon type="search" size="lg" />
      </Button>
      {isExpanded && (
        <SearchInput
          isExpanded={isExpanded}
          placeholder="Seach by movie title"
          value={searchInputValue}
          onChange={(e) => handleInputchange(e)}
          ref={inputRef}
        ></SearchInput>
      )}
      {!!searchInputValue && (
        <Button onlyIcon onClick={clearInputValue}>
          <Icon type="x-mark" size="1x" />
        </Button>
      )}
    </SearchMoviesContainer>
  );
}

Button.propTypes = {
  isExpanded: PropTypes.bool,
};
