import { Item, Separator, ItemList } from './MovieMetadata.styles';

export default function MovieMetadata({ release_date, vote_average, popularity }) {
  return (
    <ItemList>
      <Item>{release_date.slice(0, 4)}</Item>
      <Separator />
      <Item>{vote_average}/10</Item>
      <Separator />
      <Item>{Math.floor(popularity)}</Item>
    </ItemList>
  );
}
