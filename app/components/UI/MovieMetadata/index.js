import { Item, Separator, ItemList } from './MovieMetadata.styles';

export default function MovieMetadata({ movieData }) {
  return (
    <ItemList>
      <Item>{movieData.releaseDate.slice(0, 4)}</Item>
      <Separator />
      <Item>{movieData.voteAverage}/10</Item>
      <Separator />
      <Item>{Math.floor(movieData.popularity)}</Item>
    </ItemList>
  );
}
