import { PlayIcon } from '../MovieDetails.styles';
import { TitleWrapper, MovieTitile } from './TitleComponent.style';

import Button from 'components/UI/Button';

export default function TitleComponent({ title }) {
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
