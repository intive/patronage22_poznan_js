import MovieCard from 'components/UI/MovieCard';
import { Wrapper } from './CategoryPage.styles';
import Link from 'next/link';

export function CategoryPage({ moviesData }) {
  console.log(moviesData.length);
  if (moviesData.length === 0) {
    console.log("Oops looks like there's no movies anymore");
  }

  return (
    <Wrapper>
      {moviesData.map((film, index) => (
        <Link a href={`/movies/category/${film.id}`} prefetch={false} key={index} passHref>
          <MovieCard title={film.title}></MovieCard>
        </Link>
      ))}
    </Wrapper>
  );
}
