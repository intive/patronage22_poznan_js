import Button from '../UI/Button';
import { HeroWrapper, HeroGenres, HeroTitle, HeroContents } from './MovieHero.styles';
import MovieMetadata from '../UI/MovieMetadata';
import Icon from 'components/Icon';

export default function MovieHero({ ...props }) {
  const metaDataObj = {
    releaseDate: props.movieData.release_date,
    popularity: props.movieData.popularity,
    voteAverage: props.movieData.vote_average,
  };

  console.log(metaDataObj);
  return (
    <HeroWrapper
      backgroundImg={'https://image.tmdb.org/t/p/original' + props.movieData.backdrop_path}
    >
      <HeroContents>
        <HeroGenres>{props.movieData.genres[0].name}</HeroGenres>
        <HeroTitle>{props.movieData.title}</HeroTitle>
        <div style={{ paddingBottom: '14px' }}>
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
