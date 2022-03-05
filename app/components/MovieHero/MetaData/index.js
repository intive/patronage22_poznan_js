import { MetaDataWrapper, MetaDataItem, MetaDataSeparator } from './MetaData.styles';
import PropTypes from 'prop-types';

export default function MetaData({ ...props }) {
  //NOTE: real Movie data from an API will be added later, when the upper comonent MovieHero will be edited
  const movieData = {
    title: 'Fight Club',
    release_date: '1999-10-15',
    rate: 8.4,
    popularity: 60,
  };

  return (
    <MetaDataWrapper {...props}>
      <MetaDataItem>{movieData.release_date.slice(0, 4)}</MetaDataItem>
      <MetaDataSeparator />
      <MetaDataItem>{movieData.rate}/10</MetaDataItem>
      <MetaDataSeparator />
      <MetaDataItem>{movieData.popularity}</MetaDataItem>
    </MetaDataWrapper>
  );
}

MetaData.propTypes = {
  margin: PropTypes.string,
};
