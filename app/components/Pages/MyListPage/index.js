import { useState } from 'react';
import MovieGrid from 'components/UI/MovieGrid';
import { Input } from 'components/Form';
import {
  MyListWrapper,
  WrapperGrid,
  SearchDiv,
  SearchStyle,
  ErrorWrapper,
  NoMovieError,
  TitleWrapper,
  MyListTitle,
} from './MyListPage.styles';

export default function MyListPage({ moviesData = [] }) {
  const [searchQ, setSearchQ] = useState('');
  console.log(moviesData);

  if (moviesData.length === 0) {
    return (
      <ErrorWrapper>
        <NoMovieError>
          Oops, looks like there are no movies in your list!Add some first! :(
        </NoMovieError>
      </ErrorWrapper>
    );
  }
  const filteredList = searchQ
    ? moviesData.filter((movie) => movie.title?.toLowerCase().includes(searchQ.toLowerCase()))
    : moviesData;

  return (
    <>
      <MyListWrapper>
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
          <MyListTitle></MyListTitle>
        </TitleWrapper>
        <WrapperGrid>
          <MovieGrid listOfMovies={filteredList} />
        </WrapperGrid>
      </MyListWrapper>
    </>
  );
}
