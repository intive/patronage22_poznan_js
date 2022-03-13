import MovieMetadata from '.';

export default {
  title: 'UI/MovieMetadata',
  component: MovieMetadata,
};

const metaDataObj = {
  release_date: '1999-10-15',
  popularity: 60.21,
  vote_average: 8.4,
};

const Template = () => <MovieMetadata {...metaDataObj} />;

export const Default = Template.bind({});
