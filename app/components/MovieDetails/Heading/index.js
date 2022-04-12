import { PlayIcon } from '../MovieDetails.styles';
import { TitleWrapper, MovieTitile } from './Heading.styles';

import Button from 'components/UI/Button';

export default function Heading({ title, changePath }) {
  const handleClick = () => {
    changePath();
  };
  return (
    <TitleWrapper>
      <MovieTitile>{title}</MovieTitile>
      <Button onClick={() => handleClick()}>
        <PlayIcon />
        watch
      </Button>
    </TitleWrapper>
  );
}
