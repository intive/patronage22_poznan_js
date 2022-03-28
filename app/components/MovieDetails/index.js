import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import MovieMetadata from 'components/UI/MovieMetadata';
import MoviePoster from 'components/UI/MoviePoster';
import Icon from 'components/UI/Icon';
import TitleComponent from './Heading';
import { ProductionCompanies } from './Companies';
import {
  MovieDescription,
  DescriptionWrapper,
  Wrapper,
  LoadingWrapper,
  WatchBtn,
  PlayIcon,
} from './MovieDetails.styles';

export const MovieDetails = ({ movieId, movieData: preloadedMovieData }) => {
  const [movieData, setMovieData] = useState('');
  const router = useRouter();
  const { images, title, overview, productionCompanies } = movieData;
  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await fetch(`/api/movies/${movieId}`);
        const data = await resp.json();
        setMovieData(data);
      } catch (error) {
        router.push('/404');
      }
    }

    if (movieId && !preloadedMovieData) {
      setTimeout(() => {
        fetchData();
      }, 500);
    }
  }, [movieId, preloadedMovieData, router]);

  useEffect(() => {
    if (preloadedMovieData) {
      setMovieData(preloadedMovieData);
    }
  });

  return (
    <>
      {movieData ? (
        <>
          <MoviePoster src={images.poster.l} />
          <Wrapper>
            <TitleComponent title={title} />
            <DescriptionWrapper>
              <MovieDescription>
                <MovieMetadata movieData={movieData} />
                <p>{overview}</p>
              </MovieDescription>
              <ProductionCompanies productionCompanies={productionCompanies} />
              <WatchBtn fullWidth>
                <PlayIcon />
                watch
              </WatchBtn>
            </DescriptionWrapper>
          </Wrapper>
        </>
      ) : (
        <LoadingWrapper>
          <Icon opacity={1} rotation={0} size="4x" spin type="spinner" />
        </LoadingWrapper>
      )}
    </>
  );
};
