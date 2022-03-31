import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';
import { StyledMovieGrid } from './MovieGrid.styles';

export default function MovieGrid({ listOfMovies = [] }) {
  return (
    <StyledMovieGrid>
      {listOfMovies.map(({ id, title, images }) => (
        <MovieCard
          ratio="2/1"
          key={id}
          id={id}
          title={title}
          src={images?.backdrop?.l || images?.poster?.l}
        />
      ))}
    </StyledMovieGrid>
  );
}

MovieGrid.propTypes = {
  listOfMovies: PropTypes.array,
};
