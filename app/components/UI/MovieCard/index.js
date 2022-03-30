import PropTypes from 'prop-types';
import Link from 'next/link';
import MoviePoster from 'components/UI/MoviePoster';
import { Wrapper, PosterWrapper, TitleWrapper, Title } from './MovieCard.styles';

export default function MovieCard({ ...props }) {
  return (
    // I prepared movieID for future use
    <Link href={`/movie/${props.id}`} movieId={props.id}>
      <a>
        <Wrapper>
          <PosterWrapper>
            {props.src ? <MoviePoster {...props}></MoviePoster> : <div>Image not found</div>}
          </PosterWrapper>
          <TitleWrapper>
            <Title>{props.title}</Title>
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
