import Button from '../UI/Button';
import { HeroWrapper, HeroGenres, HeroTitle, HeroContents } from './MovieHero.styles';
import MovieMetadata from '../UI/MovieMetadata';
import Icon from '../UI/Icon';

export default function MovieHero({ movieData }) {
  const metaDataObj = {
    releaseDate: movieData.release_date,
    popularity: movieData.popularity,
    voteAverage: movieData.vote_average,
  };

  return (
    //line 15 will be changed in next commit
    <HeroWrapper backgroundImg={'https://image.tmdb.org/t/p/original' + movieData.backdrop_path}>
      <HeroContents>
        <HeroGenres>{movieData.genres[0].name}</HeroGenres>
        <HeroTitle>{movieData.title}</HeroTitle>
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
