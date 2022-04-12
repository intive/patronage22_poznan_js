import { MovieDetails } from '.';

import {
  data,
  recommendedMoviesData,
  similarMoviesData,
} from 'components/MovieDetails/movieMockData';

export default {
  title: 'MovieDetails/MovieDetails',
  component: MovieDetails,
};

const Template = ({ ...args }) => {
  return <MovieDetails {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  movieData: data,
  similarMovies: similarMoviesData,
  recommendedMovies: recommendedMoviesData,
};

export const TabletView = Template.bind({});
TabletView.args = {
  movieData: data,
  similarMovies: similarMoviesData,
  recommendedMovies: recommendedMoviesData,
};
TabletView.parameters = {
  viewport: {
    defaultViewport: 'ipad',
  },
};

export const MobileView = Template.bind({});
MobileView.args = {
  movieData: data,
  similarMovies: similarMoviesData,
  recommendedMovies: recommendedMoviesData,
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
