import MoviePoster from '.';

export default {
  title: 'UI/MoviePoster',
  component: MoviePoster,
};

const Template = ({ ...args }) => <MoviePoster {...args} />;

export const Poster = Template.bind({});

Poster.args = {
  src: 'https://image.tmdb.org/t/p/w500/yreqWiQ7IOkXWVB2Tz4LJIs7xqA.jpg',
};
