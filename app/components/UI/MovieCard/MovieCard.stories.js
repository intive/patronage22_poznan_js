import MovieCard from '.';

export default {
  title: 'UI/MovieCard',
  component: MovieCard,
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

const ContainerHeight = 320;
const ratio = 1.8;
const ContainerWidth = ContainerHeight / ratio;
const BackgroundHeight = ContainerHeight * 1.2;
const BackgroundWidth = ContainerWidth * 1.5;

const Container = ({ children, style }) => (
  <div
    style={{
      height: `${ContainerHeight}px`,
      width: `${ContainerWidth}px`,
      ...style,
    }}
  >
    {children}
  </div>
);

const BigContainer = ({ children, style }) => (
  <div
    style={{
      height: '600px',
      width: '344px',
      ...style,
    }}
  >
    {children}
  </div>
);

const Background = ({ children, style }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '15px',
      position: 'relative',
      background: '#1e1b26',
      height: `${BackgroundHeight}px`,
      width: `${BackgroundWidth}px`,
      ...style,
    }}
  >
    {children}
  </div>
);

const Template = ({ ...args }) => (
  <Container>
    <MovieCard {...args} />
  </Container>
);

export const AdditionalBackground = (args) => (
  <Background>
    <Container>
      <MovieCard {...args} />
    </Container>
  </Background>
);

AdditionalBackground.args = {
  src: 'https://image.tmdb.org/t/p/w342/jIywvdPjia2t3eKYbjVTcwBQlG8.jpg',
  title: 'Movie Title',
  alt: 'Movie Alt',
};

export const BigPoster = (args) => (
  <BigContainer>
    <MovieCard {...args} />
  </BigContainer>
);

BigPoster.args = {
  src: 'https://image.tmdb.org/t/p/w342/lBwOEpwVeUAmrmglcstnaGcJq3Y.jpg',
  title: 'Movie Title',
  alt: 'Movie Alt',
};

export const Card = Template.bind({});

Card.args = {
  src: 'https://image.tmdb.org/t/p/w342/yreqWiQ7IOkXWVB2Tz4LJIs7xqA.jpg',
  title: 'Movie Title',
  alt: 'Movie Alt',
};

export const LongTitle = Template.bind({});

LongTitle.args = {
  src: 'https://image.tmdb.org/t/p/w342/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
  title: 'This is some pretty looong Movie Title',
  alt: 'Movie Alt',
};
