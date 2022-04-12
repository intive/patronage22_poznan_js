import { useState } from 'react';
import MovieGrid from 'components/UI/MovieGrid';
import {
  WrapperGrid,
  SearchDiv,
  SearchStyle,
  ErrorWrapper,
  NoMovieError,
  TitleWrapper,
  CategoryTitle,
  CategoryPageWrapper,
} from './CategoryPage.styles';
import { Input } from 'components/Form';

export default function CategoryPage({ moviesData = [], categoryName }) {
  const [searchQ, setSearchQ] = useState('');

  if (moviesData.length === 0) {
    return (
      <ErrorWrapper>
        <NoMovieError>Oops, looks like there are no movies in this {categoryName}! :(</NoMovieError>
      </ErrorWrapper>
    );
  }

  const filteredList = searchQ
    ? moviesData.filter((movie) => movie.title?.toLowerCase().includes(searchQ.toLowerCase()))
    : moviesData;

  return (
    <>
      <CategoryPageWrapper>
        <SearchDiv>
          <SearchStyle>
            <Input
              id="search"
              placeholder="Search the movies in this category..."
              onChange={(event) => setSearchQ(event.target.value)}
              value={searchQ}
            />
          </SearchStyle>
        </SearchDiv>
        <TitleWrapper>
          <CategoryTitle>{categoryName}</CategoryTitle>
        </TitleWrapper>
        <WrapperGrid>
          <MovieGrid listOfMovies={filteredList} />
        </WrapperGrid>
      </CategoryPageWrapper>
    </>
  );
}
