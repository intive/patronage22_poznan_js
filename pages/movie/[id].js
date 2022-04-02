import { useSession } from 'next-auth/react';

import {
  getListOfRecommendedMoviesById,
  getListOfSimilarMoviesById,
  getMovieById,
} from 'server/services/movieDb';

export default function Movie({ movieData, listOfSimilarMovies, ListOfRecommendedMovies }) {
  const { data: session } = useSession();
  const movieId = movieData.id;

  console.log(movieData);
  console.log(movieId);
  console.log(listOfSimilarMovies);
  console.log(ListOfRecommendedMovies);

  return (
    <>
      {session?.user ? (
        // here gona be MovieDetails component with pass props
        <div>helo</div>
      ) : (
        <>Not signed in :(</>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const movie = await getMovieById(id);
  const movieData = movie;
  const SimilarMovies = await getListOfSimilarMoviesById(id);
  const listOfSimilarMovies = SimilarMovies.results;
  const RecommendedMovies = await getListOfRecommendedMoviesById(id);
  const ListOfRecommendedMovies = RecommendedMovies.results;

  return {
    props: {
      movieData,
      listOfSimilarMovies,
      ListOfRecommendedMovies,
    },
  };
}
