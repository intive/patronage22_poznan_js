import React from 'react';
import StyledMoviePoster from './MoviePoster.styles';
import PropTypes from 'prop-types';

export default function MoviePoster({ src, alt, title, ...props }) {
  return <StyledMoviePoster src={src} alt={alt} title={title} loading={'lazy'} {...props} />;
}

MoviePoster.propTypes = {
  src: PropTypes.oneOf([
    'https://image.tmdb.org/t/p/w342/lBwOEpwVeUAmrmglcstnaGcJq3Y.jpg',
    'https://image.tmdb.org/t/p/w342/8AVb7tyxZRsbKJNOTJHQZl7JYWO.jpg',
    'https://image.tmdb.org/t/p/w342/yreqWiQ7IOkXWVB2Tz4LJIs7xqA.jpg',
  ]),
};
