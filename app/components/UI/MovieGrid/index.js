import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';
import { StyledMovieGrid } from './MovieGrid.styles';

export default function MovieGrid({ listOfMovies = [] }) {
  return (
    <StyledMovieGrid>
      {listOfMovies.map(({ id, title, images }) => (
        <MovieCard key={id} id={id} title={title} src={images?.poster?.l} />
      ))}
    </StyledMovieGrid>
  );
}

MovieGrid.propTypes = {
  listOfMovies: PropTypes.array,
};
