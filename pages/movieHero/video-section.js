import MovieHero from 'components/MovieHero';

export default function VideoSection() {
  //temporary movie object for scientific purposes
  //waiting for working movie API
  const movieObj = {
    poster_path: 'https://wallpaperaccess.com/full/2191678.jpg',
    title: 'Whiplash',
  };

  return (
    <>
      <MovieHero heroObj={movieObj}></MovieHero>
    </>
  );
}
