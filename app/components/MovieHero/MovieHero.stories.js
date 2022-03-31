import MovieHero from '.';

export default {
  title: 'MovieHero/MovieHero',
  component: MovieHero,
};

const Template = (args) => (
  <div style={{ height: '100vh', width: '100%' }}>
    <MovieHero movieData={movieMockData} {...args} />
  </div>
);

const movieMockData = {
  images: {
    backdrop: {
      xxs: 'https://image.tmdb.org/t/p/w92/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg',
      xs: 'https://image.tmdb.org/t/p/w154/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg',
      s: 'https://image.tmdb.org/t/p/w185/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg',
      m: 'https://image.tmdb.org/t/p/w342/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg',
      l: 'https://image.tmdb.org/t/p/w500/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg',
      xl: 'https://image.tmdb.org/t/p/w780/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg',
      original: 'https://image.tmdb.org/t/p/original/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg',
    },
  },
  genres: [{ id: 18, name: 'Drama' }],
  popularity: 60.21,
  releaseDate: '1999-10-15',
  title: 'Fight Club',
  voteAverage: 8.4,
};

const dataWithLongTitle = {
  ...movieMockData,
  title: "Fight Club but it's very long witch looks strange",
};

export const Default = Template.bind({});
Default.args = {
  movieData: movieMockData,
};
Default.parameters = {
  layout: 'fullscreen',
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  movieData: dataWithLongTitle,
};
LongTitle.parameters = {
  layout: 'fullscreen',
};
