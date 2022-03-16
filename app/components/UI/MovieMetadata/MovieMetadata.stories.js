import MovieMetadata from '.';

export default {
  title: 'UI/MovieMetadata',
  component: MovieMetadata,
};

const metaDataObj = {
  releaseDate: '1999-10-15',
  popularity: 60.21,
  voteAverage: 8.4,
};

const Template = ({ ...args }) => <MovieMetadata {...args} />;

export const Default = Template.bind({});
Default.args = {
  movieData: metaDataObj,
};
