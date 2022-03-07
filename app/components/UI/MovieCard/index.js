import React from 'react';
import { useState, useEffect } from 'react';
import { StyledMovieCard } from './MovieCard.styles';
import { StyledMovieCardTitleWrapper } from './MovieCard.styles';
import { StyledMovieCardTitle } from './MovieCard.styles';
import PropTypes from 'prop-types';
import MoviePoster from '../MoviePoster';

export default function MovieCard({ id, ...props }) {
  // avaiable poster sizes (width): "w92", "w154", "w185", "w342", "w500", "w780", "original"
  const posterSize = 'w342';
  const BASE_MOVIE_IMG_URL = `https://image.tmdb.org/t/p/${posterSize}`;

  let [poster, setPoster] = useState(null);

  useEffect(() => {
    fetch(`../api/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setPoster(data));
  }, [id, setPoster]);

  return (
    <>
      {poster && (
        <StyledMovieCard>
          <MoviePoster
            src={BASE_MOVIE_IMG_URL + poster.poster_path}
            alt={poster.title}
            title={poster.title}
            {...props}
          ></MoviePoster>

          <StyledMovieCardTitleWrapper>
            <StyledMovieCardTitle>{poster.title}</StyledMovieCardTitle>
          </StyledMovieCardTitleWrapper>
        </StyledMovieCard>
      )}
    </>
  );
}

MovieCard.propTypes = {
  movieId: PropTypes.string,
};
