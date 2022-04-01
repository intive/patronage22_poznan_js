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
  CarouselTitle,
} from './MovieDetails.styles';

export const MovieDetails = ({
  movieId,
  similarMovies,
  recommendedMovies,
  movieData: preloadedMovieData,
}) => {
  const [movieData, setMovieData] = useState('');
  const [similarMoviesData, setSimilarMoviesData] = useState([]);
  const [recommendedMoviesData, setRecommendedMoviesData] = useState([]);

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
      try {
        const resp = await fetch(`/api/movies/${movieId}/similar`);
        const data = await resp.json();
        setSimilarMoviesData(data);
      } catch (error) {
        router.push('/404');
      }
      try {
        const resp = await fetch(`/api/movies/${movieId}/recommendations`);
        const data = await resp.json();
        setRecommendedMoviesData(data);
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
    if (preloadedMovieData && similarMovies && recommendedMovies) {
      setMovieData(preloadedMovieData);
      setSimilarMoviesData(similarMovies);
      setRecommendedMoviesData(recommendedMovies);
    }
  }, [preloadedMovieData, similarMovies, recommendedMovies]);

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
            <CarouselTitle>Recommended Movies</CarouselTitle>
            <Carousel movies={recommendedMoviesData} />
            <CarouselTitle>Similar Movies</CarouselTitle>
            <Carousel movies={similarMoviesData} />
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
