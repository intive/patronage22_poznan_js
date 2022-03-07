import MovieCard from '.';

export default {
  title: 'UI/MovieCard',
  component: MovieCard,
};

const Template = ({ ...args }) => <MovieCard {...args} />;

export const Card = Template.bind({});

Card.args = {
  movieId: '1103',
};
