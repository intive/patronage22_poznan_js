import MovieHero from '.';

export default {
  title: 'MovieHero/MovieHero',
  component: MovieHero,
};

const Template = (args) => <MovieHero movieData={movieMockData} {...args} />;

const movieMockData = {
  backdrop: {
    xxs: 'https://image.tmdb.org/t/p/w92/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg',
    xs: 'https://image.tmdb.org/t/p/w154/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg',
    s: 'https://image.tmdb.org/t/p/w185/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg',
    m: 'https://image.tmdb.org/t/p/w342/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg',
    l: 'https://image.tmdb.org/t/p/w500/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg',
    xl: 'https://image.tmdb.org/t/p/w780/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg',
    original: 'https://image.tmdb.org/t/p/original/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg',
  },
  genres: [{ id: 18, name: 'Drama' }],
  popularity: 60.21,
  poster: {
    xxs: 'https://image.tmdb.org/t/p/w92/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    xs: 'https://image.tmdb.org/t/p/w154/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    s: 'https://image.tmdb.org/t/p/w185/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    m: 'https://image.tmdb.org/t/p/w342/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    l: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    xl: 'https://image.tmdb.org/t/p/w780/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    original: 'https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
  },
  releaseDate: '1999-10-15',
  title: 'Fight Club',
  voteAverage: 8.4,
};

export const Default = Template.bind();

Default.parameters = {
  layout: 'fullscreen',
};
