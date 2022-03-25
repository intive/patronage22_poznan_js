import { Item, Separator, ItemList } from './MovieMetadata.styles';
import StarRating from './StarRating';

export default function MovieMetadata({ movieData }) {
  return (
    <ItemList>
      <Item>{movieData.releaseDate.slice(0, 4)}</Item>
      <Separator />
      <Item>
        <StarRating vote={movieData.voteAverage} />
      </Item>
      <Separator />
      <Item>{Math.floor(movieData.popularity)}</Item>
    </ItemList>
  );
}
