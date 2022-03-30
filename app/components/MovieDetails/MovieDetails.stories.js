import { MovieDetails } from '.';

export default {
  title: 'MovieDetails/MovieDetails',
  component: MovieDetails,
};

const data = {
  adult: false,
  backdropPath: '/bCXLsO2MJWzYYBJoavGOZN5iqGn.jpg',
  belongsToCollection: null,
  budget: 4000000,
  genres: [
    { id: 80, name: 'Crime' },
    { id: 35, name: 'Comedy' },
  ],
  homepage: 'https://www.miramax.com/movie/four-rooms/',
  id: 5,
  imdbId: 'tt0113101',
  originalLanguage: 'en',
  originalTitle: 'Four Rooms',
  overview:
    "It's Ted the Bellhop's first night on the job...and the hotel's very unusual guests are about to place him in some outrageous predicaments. It seems that this evening's room service is serving up one unbelievable happening after another.",
  popularity: 16.007,
  posterPath: '/75aHn1NOYXh4M7L5shoeQ6NGykP.jpg',
  productionCompanies: [
    {
      id: 14,
      logo_path: '/m6AHu84oZQxvq7n1rsvMNJIAsMu.png',
      name: 'Miramax',
      origin_country: 'US',
    },
    {
      id: 59,
      logo_path: '/yH7OMeSxhfP0AVM6iT0rsF3F4ZC.png',
      name: 'A Band Apart',
      origin_country: 'US',
    },
  ],
  productionCountries: [{ iso_3166_1: 'US', name: 'United States of America' }],
  releaseDate: '1995-12-09',
  revenue: 4257354,
  runtime: 98,
  spokenLanguages: [{ english_name: 'English', iso_639_1: 'en', name: 'English' }],
  status: 'Released',
  tagline:
    "Twelve outrageous guests. Four scandalous requests. And one lone bellhop, in his first day on the job, who's in for the wildest New year's Eve of his life.",
  title: 'Four Rooms',
  video: false,
  voteAverage: 5.7,
  voteCount: 2131,
  images: {
    poster: {
      xxs: 'https://image.tmdb.org/t/p/w92/75aHn1NOYXh4M7L5shoeQ6NGykP.jpg',
      xs: 'https://image.tmdb.org/t/p/w154/75aHn1NOYXh4M7L5shoeQ6NGykP.jpg',
      s: 'https://image.tmdb.org/t/p/w185/75aHn1NOYXh4M7L5shoeQ6NGykP.jpg',
      m: 'https://image.tmdb.org/t/p/w342/75aHn1NOYXh4M7L5shoeQ6NGykP.jpg',
      l: 'https://image.tmdb.org/t/p/w500/75aHn1NOYXh4M7L5shoeQ6NGykP.jpg',
      xl: 'https://image.tmdb.org/t/p/w780/75aHn1NOYXh4M7L5shoeQ6NGykP.jpg',
      original: 'https://image.tmdb.org/t/p/original/75aHn1NOYXh4M7L5shoeQ6NGykP.jpg',
    },
    backdrop: {
      xxs: 'https://image.tmdb.org/t/p/w92/bCXLsO2MJWzYYBJoavGOZN5iqGn.jpg',
      xs: 'https://image.tmdb.org/t/p/w154/bCXLsO2MJWzYYBJoavGOZN5iqGn.jpg',
      s: 'https://image.tmdb.org/t/p/w185/bCXLsO2MJWzYYBJoavGOZN5iqGn.jpg',
      m: 'https://image.tmdb.org/t/p/w342/bCXLsO2MJWzYYBJoavGOZN5iqGn.jpg',
      l: 'https://image.tmdb.org/t/p/w500/bCXLsO2MJWzYYBJoavGOZN5iqGn.jpg',
      xl: 'https://image.tmdb.org/t/p/w780/bCXLsO2MJWzYYBJoavGOZN5iqGn.jpg',
      original: 'https://image.tmdb.org/t/p/original/bCXLsO2MJWzYYBJoavGOZN5iqGn.jpg',
    },
  },
};

const Template = ({ ...args }) => {
  return <MovieDetails {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  movieData: data,
};

export const TabletView = Template.bind({});
TabletView.args = {
  movieData: data,
};
TabletView.parameters = {
  viewport: {
    defaultViewport: 'ipad',
  },
};

export const MobileView = Template.bind({});
MobileView.args = {
  movieData: data,
};
MobileView.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};

export const LoadingScreen = Template.bind({});
LoadingScreen.parameters = {
  viewport: {
    defaultViewport: 'ipad',
  },
};
