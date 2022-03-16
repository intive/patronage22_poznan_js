import React from 'react';
import Carousel from 'components/Carousel';
import { movies } from '../../../lib/carousel/mockData';

function Movies() {
  return (
    <div className="Movies">
      <Carousel movies={movies} />
    </div>
  );
}
export default Movies;
