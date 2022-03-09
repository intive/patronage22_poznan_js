import PropTypes from 'prop-types';
import React from 'react';
import { Wrapper, PosterWrapper, TitleWrapper, Title } from './MovieCard.styles';
import Link from 'next/link';
import MoviePoster from '../MoviePoster';

export default function MovieCard({ src, title, alt, href, ...props }) {
  /* TODO placeholder for link to specific movie  */
  href = '#';
  return (
    <>
      <Link href={href} passHref>
        <a>
          <Wrapper>
            <PosterWrapper>
              <MoviePoster src={src} alt={alt} title={title} {...props}></MoviePoster>
            </PosterWrapper>
            <TitleWrapper>
              <Title>{title}</Title>
            </TitleWrapper>
          </Wrapper>
        </a>
      </Link>
    </>
  );
}

MovieCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
  href: PropTypes.string,
};
