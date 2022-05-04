import PropTypes from 'prop-types';
import Link from 'next/link';
import MoviePoster from 'components/UI/MoviePoster';
import {
  Wrapper,
  PosterWrapper,
  ImagePlaceholder,
  TitleAndLikeButtonWrapper,
  Title,
} from './MovieCard.styles';
import LikeButton from 'components/LikeButton';

export default function MovieCard({ ...props }) {
  return (
    <div>
      <Link href={`/movie/${props.id}`} movieId={props.id}>
        <a>
          <Wrapper>
            <PosterWrapper ratio={props.ratio}>
              {props.src ? (
                <MoviePoster {...props}></MoviePoster>
              ) : (
                <ImagePlaceholder>Image not found</ImagePlaceholder>
              )}
            </PosterWrapper>
          </Wrapper>
        </a>
      </Link>
      <TitleAndLikeButtonWrapper>
        <Title>{props.title}</Title>
        <LikeButton movieId={props.id} />
      </TitleAndLikeButtonWrapper>
    </div>
  );
}

MovieCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
  href: PropTypes.string,
};
