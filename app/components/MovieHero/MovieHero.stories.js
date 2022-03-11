import React from 'react';
import MovieHero from '.';

export default {
  title: 'MovieHero/MovieHero',
  component: MovieHero,
};

const Template = (args) => <MovieHero {...args}></MovieHero>;

// temporairly use mockup data
// TODO: use movie ID endpoint
const movieMockData = require('../../../lib/movies/movieMockData.json')[0];

export const Desktop = Template.bind({});
Desktop.args = {
  movieData: movieMockData,
};
Desktop.parameters = {
  layout: 'fullscreen',
};
