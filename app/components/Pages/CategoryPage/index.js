import { useState } from 'react';
import MovieCard from 'components/UI/MovieCard';
import {
  WrapperGrid,
  MovieCardWrapper,
  SearchDiv,
  SearchStyle,
  ErrorWrapper,
  NoMovieError,
  TitleWrapper,
  CategoryTitle,
} from './CategoryPage.styles';
import { Input } from 'components/Form';

export default function CategoryPage({ moviesData, categoryName }) {
  const [searchQ, setSearchQ] = useState('');
  console.log(moviesData);

  if (moviesData.length === 0) {
    return (
      <ErrorWrapper>
        <NoMovieError>Oops, looks like there are no movies in this category! :(</NoMovieError>
      </ErrorWrapper>
    );
  }

  const filteredList = searchQ
    ? moviesData.filter((movie) => movie.title?.toLowerCase().includes(searchQ.toLowerCase()))
    : moviesData;

  return (
    <>
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
        {filteredList.map((film, id) => (
          <MovieCardWrapper key={id}>
            <MovieCard
              href={`/movies/${film.id}`}
              movieId={film.id}
              title={film.title}
              src={film.images.poster.m}
              alt={film.title}
            ></MovieCard>
          </MovieCardWrapper>
        ))}
      </WrapperGrid>
    </>
  );
}
