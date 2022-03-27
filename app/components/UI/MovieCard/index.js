import PropTypes from 'prop-types';
import Link from 'next/link';
import MoviePoster from 'components/UI/MoviePoster';
import { Wrapper, PosterWrapper, TitleWrapper, Title } from './MovieCard.styles';

export default function MovieCard({ src, title, alt, href, movieId, ...props }) {
  /* TODO placeholder for link to specific movie  */
  href = '#';
  return (
    // I prepared movieID for future use
    <Link href={href} movieId={movieId}>
      <a>
        <Wrapper>
          <PosterWrapper>
            {src ? (
              <MoviePoster src={src} alt={alt} title={title} {...props}></MoviePoster>
            ) : (
              <div>Image not found</div>
            )}
          </PosterWrapper>
          <TitleWrapper>
            <Title>{title}</Title>
          </TitleWrapper>
        </Wrapper>
      </a>
    </Link>
  );
}

MovieCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
  href: PropTypes.string,
};
