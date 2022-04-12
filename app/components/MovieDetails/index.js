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
  const [movieData, setMovieData] = useState({});
  const [similarMoviesData, setSimilarMoviesData] = useState([]);
  const [recommendedMoviesData, setRecommendedMoviesData] = useState([]);
  const [isButtonClick, setButtonClick] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const allFetchedData = [];
    if (!preloadedMovieData && movieId) {
      setMovieData({});
      const fetchMovie = fetch(`/api/movies/${movieId}`).then((response) =>
        response
          .json()
          .then((data) => setMovieData(data))
          .catch((error) => router.push('movie/404', error))
      );
      allFetchedData.push(fetchMovie);
    }
    if (similarMovies === undefined) {
      const fetchSmilarMovies = fetch(`/api/movies/${movieId}/similar`)
        .then((response) => response.json())
        .then((data) => setSimilarMoviesData(data));
      allFetchedData.push(fetchSmilarMovies);
    }
    if (recommendedMovies === undefined) {
      const fetchRecommendationMovies = fetch(`/api/movies/${movieId}/recommendations`)
        .then((response) => response.json())
        .then((data) => setRecommendedMoviesData(data));
      allFetchedData.push(fetchRecommendationMovies);
    }
    Promise.all(allFetchedData);
  }, [movieId, preloadedMovieData, router, similarMovies, recommendedMovies]);

  useEffect(() => {
    if (preloadedMovieData) {
      setMovieData(preloadedMovieData);
    }
    if (isButtonClick) {
      router.push(`/movie/${movieId}`, undefined, { shallow: true });
    }
  }, [preloadedMovieData, isButtonClick, router, movieId]);

  useEffect(() => {
    router.push(`/?movie/${movieId}`, `/movie/${movieId}`, { shallow: true });
  }, [movieId]);

  // trigger to change path to movie/movieID
  const handleChangePath = () => {
    setButtonClick(!isButtonClick);
  };

  const { images, title, overview, productionCompanies } = movieData;

  return (
    <>
      {movieData?.id ? (
        <MovieDetailsWrapper>
          <MovieBackDrop backgroundImg={images?.backdrop?.original}>
            <Heading title={title} changePath={handleChangePath} />
          </MovieBackDrop>
          <DescriptionWrapper>
            <MovieDescription>
              <MovieMetadata movieData={movieData} />
              <p>{overview}</p>
            </MovieDescription>
            {productionCompanies && (
              <ProductionCompanies productionCompanies={productionCompanies} />
            )}
            <WatchBtn fullWidth onClick={handleChangePath}>
              <PlayIcon />
              watch
            </WatchBtn>
          </DescriptionWrapper>
          <CarouselWrapper>
            {(recommendedMovies || recommendedMoviesData) && (
              <>
                <CarouselTitle>Recommended Movies</CarouselTitle>
                <Carousel movies={recommendedMovies || recommendedMoviesData} />
              </>
            )}
            <CarouselTitle>Similar Movies</CarouselTitle>
            <Carousel movies={similarMovies || similarMoviesData} />
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
