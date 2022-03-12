import MoviePoster from '.';

export default {
  title: 'UI/MoviePoster',
  component: MoviePoster,
  argTypes: {
    src: {
      options: [
        'https://image.tmdb.org/t/p/w342/yreqWiQ7IOkXWVB2Tz4LJIs7xqA.jpg',
        'https://image.tmdb.org/t/p/w342/8AVb7tyxZRsbKJNOTJHQZl7JYWO.jpg',
        'https://image.tmdb.org/t/p/w342/lBwOEpwVeUAmrmglcstnaGcJq3Y.jpg',
        'https://image.tmdb.org/t/p/w342/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
        'https://image.tmdb.org/t/p/w342/jIywvdPjia2t3eKYbjVTcwBQlG8.jpg',
      ],
      control: { type: 'radio' },
    },
  },
};

const Container = ({ children, style }) => (
  <div
    style={{
      position: 'relative',
      height: '320px',
      width: '213px',
      ...style,
    }}
  >
    {children}
  </div>
);

const Template = ({ ...args }) => (
  <Container>
    <MoviePoster {...args} />
  </Container>
);

export const Poster = Template.bind({});

Poster.args = {
  src: 'https://image.tmdb.org/t/p/w342/jIywvdPjia2t3eKYbjVTcwBQlG8.jpg',
};
