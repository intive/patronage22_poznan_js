import MovieHero from '.';

export default {
  title: 'MovieHero/MovieHero',
  component: MovieHero,
};

const Template = (args) => <MovieHero {...args} />;

const movieMockData = {
  backdrop_path: '/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg',
  genres: [{ id: 18, name: 'Drama' }],
  popularity: 60.21,
  poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
  release_date: '1999-10-15',
  title: 'Fight Club',
  vote_average: 8.4,
};

export const Desktop = Template.bind({});
Desktop.args = {
  movieData: movieMockData,
};
Desktop.parameters = {
  layout: 'fullscreen',
};
