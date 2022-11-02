import { useSession } from 'next-auth/react';

import {
  getListOfRecommendedMoviesById,
  getListOfSimilarMoviesById,
  getMovieById,
} from 'server/services/movieDb';

export default function Movie({ movieData, listOfSimilarMovies, listOfRecommendedMovies }) {
  const { data: session } = useSession();

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
  const { id } = context.params;
  try {
    const movieData = await getMovieById(id);

    const listOfSimilarMovies = await getListOfSimilarMoviesById(id).then((data) => data.results);

    const listOfRecommendedMovies = await getListOfRecommendedMoviesById(id).then(
      (data) => data.results
    );

    return {
      props: {
        movieData,
        listOfSimilarMovies,
        listOfRecommendedMovies,
      },
    };
  } catch (e) {
    return { props: {} };
  }
}
