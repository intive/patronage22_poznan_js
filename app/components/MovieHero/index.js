import Button from '../UI/Button';
import { HeroWrapper, HeroGenres, HeroTitle, HeroContents } from './MovieHero.styles';
import MovieMetadata from '../UI/MovieMetadata';
import Icon from '../UI/Icon';

export default function MovieHero({ movieData }) {
  const metaDataObj = {
    releaseDate: movieData.movie.releaseDate,
    popularity: movieData.movie.popularity,
    voteAverage: movieData.movie.voteAverage,
  };

  return (
    <HeroWrapper backgroundImg={movieData.movie.images.backdrop.original}>
      <HeroContents>
        <HeroGenres>{movieData.movie.genres[0].name}</HeroGenres>
        <HeroTitle
          medium={movieData.movie.title.length > 12}
          long={movieData.movie.title.length > 18}
        >
          {movieData.title}
        </HeroTitle>
        <div style={{ paddingBottom: '24px' }}>
          <MovieMetadata movieData={metaDataObj} />
        </div>
        <Button onClick={() => {}}>
          <Icon type="play" style={{ marginRight: '1em' }} />
          Watch
        </Button>
      </HeroContents>
    </HeroWrapper>
  );
}
