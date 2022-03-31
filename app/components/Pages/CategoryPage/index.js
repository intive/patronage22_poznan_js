import MovieCard from 'components/UI/MovieCard';
import { useState } from 'react';
import {
  WrapperGrid,
  MovieCardWrapper,
  SearchDiv,
  SearchStyle,
  ErrorWrapper,
  NoMovieError,
} from './CategoryPage.styles';
import { Input } from 'components/Form';

export default function CategoryPage({ moviesData, ...props }) {
  if (moviesData.length === 0) {
    return (
      <ErrorWrapper>
        <NoMovieError>Oops, looks like there are no movies in this category! :(</NoMovieError>
      </ErrorWrapper>
    );
  }

  const [searchQ, setSearchQ] = useState('');

  const filteredList = searchQ
    ? moviesData.filter((movie) => movie.title.includes(searchQ))
    : moviesData;

  return (
    <>
      <SearchDiv>
        <SearchStyle>
          <Input
            id="search"
            placeholder="Enter the title..."
            onChange={(event) => setSearchQ(event.target.value)}
            value={searchQ}
          />
        </SearchStyle>
      </SearchDiv>
      <WrapperGrid>
        {filteredList.map((film, id) => (
          <MovieCardWrapper key={id}>
            <MovieCard
              href={`/movie/${props.id}`}
              movieId={film.id}
              title={film.title}
              src={film.images.poster.m}
              alt={film.title}
              {...props}
            ></MovieCard>
          </MovieCardWrapper>
        ))}
      </WrapperGrid>
    </>
  );
}
