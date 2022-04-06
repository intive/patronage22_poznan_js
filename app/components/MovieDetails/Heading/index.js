import { PlayIcon } from '../MovieDetails.styles';
import { TitleWrapper, MovieTitile } from './Heading.styles';

import Button from 'components/UI/Button';

export default function Heading({ title }) {
  return (
    <TitleWrapper>
      <MovieTitile>{title}</MovieTitile>
      <Button>
        <PlayIcon />
        watch
      </Button>
    </TitleWrapper>
  );
}