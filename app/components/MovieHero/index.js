import Button from '../UI/Button';
import { HeroWrapper, HeroGenres, HeroTitle, HeroContents } from './MovieHero.styles';
import MovieMetadata from '../UI/MovieMetadata';
import Icon from '../UI/Icon';

export default function MovieHero({ movieData }) {
  return (
    <HeroWrapper backgroundImg={movieData.images?.backdrop?.original}>
      <HeroContents>
        <HeroGenres>{movieData.genres?.[0].name}</HeroGenres>
        <HeroTitle medium={movieData.title?.length > 12} long={movieData.title?.length > 18}>
          {movieData.title}
        </HeroTitle>
        <div style={{ paddingBottom: '24px' }}>
          <MovieMetadata movieData={movieData} />
        </div>
        <Button onClick={() => {}}>
          <Icon type="play" style={{ marginRight: '1em' }} />
          Watch
        </Button>
      </HeroContents>
    </HeroWrapper>
  );
}
