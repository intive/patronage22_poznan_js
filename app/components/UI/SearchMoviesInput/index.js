import Router from 'next/router';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import useOnClickOutside from 'hooks/useOnClickOutside';
import { SearchMoviesContainer, SearchInput, SearchButton } from './SearchMoviesInput.styles';
import Button from 'components/UI/Button';
import Icon from 'components/UI/Icon';

export default function SearchMoviesInput() {
  const [isExpanded, setExpanded] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [isThrottling, setIsThrottling] = useState(false);

  const inputRef = useRef();
  const containerRef = useRef();
  const router = useRouter();

  useEffect(() => {
    if (isExpanded && !searchInputValue) {
      inputRef.current.focus();
    }
  }, [isExpanded, searchInputValue]);

  useEffect(() => {
    if (router.pathname !== '/search') {
      setSearchInputValue('');
      setExpanded(false);
    }
  }, [router.pathname]);

  useEffect(() => {
    if (isThrottling) {
      const timer = setTimeout(() => {
        setIsThrottling(false);
      }, 400);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isThrottling]);

  useOnClickOutside(containerRef, () => {
    searchInputValue ? setExpanded(true) : setExpanded(false);
  });

  const handleInputIconClick = () => {
    if (searchInputValue) {
      updateQuery();
      return;
    }
    setExpanded(!isExpanded);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchInputValue(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      updateQuery();
    }
  };

  const clearInputValue = () => {
    setSearchInputValue('');
  };

  const updateQuery = () => {
    setIsThrottling(true);
    if (searchInputValue.length > 1 && !isThrottling) {
      Router.push({
        pathname: '/search',
        query: { query: searchInputValue },
      });
    }
  };

  return (
    <SearchMoviesContainer isExpanded={isExpanded} ref={containerRef}>
      <SearchButton onlyIcon onClick={handleInputIconClick}>
        <Icon type="search" size="lg" />
      </SearchButton>
      {isExpanded && (
        <SearchInput
          isExpanded={isExpanded}
          placeholder="Search by movie title"
          value={searchInputValue}
          onChange={(e) => handleInputChange(e)}
          onKeyDown={handleKeyDown}
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
