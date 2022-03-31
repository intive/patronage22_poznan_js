import MovieGrid from '.';

export default {
  title: 'UI/MovieGrid',
  component: MovieGrid,
};

const mockMovieList = [
  {
    images: {
      poster: {
        l: 'https://image.tmdb.org/t/p/w500/7tNTPZMb13W0AhkcuoL6myRrNRr.jpg',
      },
    },
    title: 'The Lord of the Rings: The Two Towers',
    id: 321,
  },
  {
    images: {
      poster: {
        l: 'https://image.tmdb.org/t/p/w500/vRQnzOn4HjIMX4LBq9nHhFXbsSu.jpg',
      },
    },
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    id: 654,
  },
  {
    images: {
      poster: {
        l: 'https://image.tmdb.org/t/p/w500/lXhgCODAbBXL5buk9yEmTpOoOgR.jpg',
      },
    },
    title: 'The Lord of the Rings: The Return of the King',
    id: 534,
  },
  {
    images: {
      poster: {
        l: 'https://image.tmdb.org/t/p/w500/gioXMobK8vbD6bcTsjKYKfgacNt.jpg',
      },
    },
    title: 'The Hobbit: An Unexpected Journey',
    id: 909,
  },
  {
    images: {
      poster: {
        l: 'https://image.tmdb.org/t/p/w500/bSQjIZO9aJCJBqxGX3Sx2xtujzT.jpg',
      },
    },
    title: 'The Hobbit: The Desolation of Smaug',
    id: 8678,
  },
  {
    images: {
      poster: {
        l: 'https://image.tmdb.org/t/p/w500/zn13a7U9eMTJq8sHthe3bCgsVm4.jpg',
      },
    },
    title: 'The Hobbit: The Battle of the Five Armies',
    id: 120,
  },
];

const Template = (args) => {
  return (
    <div style={{ backgroundColor: '#1E1B26', padding: '1rem' }}>
      <MovieGrid {...args} />;
    </div>
  );
};

export const Responsive = Template.bind({});
Responsive.args = {
  listOfMovies: mockMovieList,
};

export const TabletView = Template.bind({});
TabletView.parameters = {
  viewport: {
    defaultViewport: 'ipad',
  },
};
TabletView.args = {
  listOfMovies: mockMovieList,
};

export const MobileView = Template.bind({});
MobileView.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
MobileView.args = {
  listOfMovies: mockMovieList,
};
