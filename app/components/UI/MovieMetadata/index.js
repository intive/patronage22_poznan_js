import { Wrapper, Item, Separator, ItemList } from './MovieMetadata.styles';
import PropTypes from 'prop-types';

export default function MovieMetadata({ ...props }) {
  return (
    <Wrapper>
      <ItemList>
        <Item>{props.release_date.slice(0, 4)}</Item>
        <Separator />
        <Item>{props.vote_average}/10</Item>
        <Separator />
        <Item>{Math.floor(props.popularity)}</Item>
      </ItemList>
    </Wrapper>
  );
}
