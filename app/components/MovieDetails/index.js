import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import MovieMetadata from 'components/UI/MovieMetadata';
import Carousel from 'components/Carousel';
import Icon from 'components/UI/Icon';
import Heading from './Heading';
import { ProductionCompanies } from './ProductionCompanies';
import {
  MovieDetailsWrapper,
  MovieBackDrop,
  LoadingWrapper,
  WatchBtn,
  PlayIcon,
  DescriptionWrapper,
  MovieDescription,
  CarouselWrapper,
} from './MovieDetails.styles';

export const MovieDetails = ({ movieId, movieData: preloadedMovieData }) => {
  const [movieData, setMovieData] = useState('');
  const [similarMoviesData, setSimilarMoviesData] = useState([]);

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
    async function fetchSimilarMovieData() {
      try {
        const resp = await fetch(`/api/movies/${movieId}/similar`);
        const data = await resp.json();
        setSimilarMoviesData(data);
      } catch (error) {
        router.push('/404');
      }
    }
    if (movieId && !preloadedMovieData) {
      setTimeout(() => {
        fetchData();
        fetchSimilarMovieData();
      }, 500);
    }
  }, [movieId, preloadedMovieData, router]);

  useEffect(() => {
    if (preloadedMovieData) {
      setMovieData(preloadedMovieData);
    }
  }, [preloadedMovieData]);

  return (
    <>
      {movieData ? (
        <MovieDetailsWrapper>
          <MovieBackDrop backgroundImg={images?.backdrop?.original}>
            <Heading title={title} />
          </MovieBackDrop>
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
          <CarouselWrapper>
            <Carousel movies={[...similarMoviesData]} />
          </CarouselWrapper>
        </MovieDetailsWrapper>
      ) : (
        <LoadingWrapper>
          <Icon opacity={1} rotation={0} size="4x" spin type="spinner" />
        </LoadingWrapper>
      )}
    </>
  );
};
