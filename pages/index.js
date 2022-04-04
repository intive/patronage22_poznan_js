import { useSession } from 'next-auth/react';
import { verifyJwtInRequest } from 'server/hash';
import { getMyList } from 'server/services/myListClient';
import HomePage from 'components/Pages/HomePage';
import {
  getListOfMoviesByCategoryId,
  getListOfPopularMovies,
  getMovieById,
} from 'server/services/movieDb';
import { genresList } from 'components/Pages/HomePage/genresList';

export default function Home({ listOfCarousels, heroMovie }) {
  const { data: session } = useSession();
  return (
    <>
      {session?.user ? (
        <HomePage listOfCarousels={listOfCarousels} heroMovie={heroMovie} />
      ) : (
        <>Not signed in :(</>
      )}
    </>
  );
}

export async function getServerSideProps({ req }) {
  try {
    const listOfCategories = await Promise.all(
      genresList.map(async (category) => {
        const list = await getListOfMoviesByCategoryId(category.id);
        const listOfMovies = list.results;
        return { ...category, listOfMovies };
      })
    );

    const session = await verifyJwtInRequest(req);
    const myList = await getMyList({ session });
    const popularList = await getListOfPopularMovies(req);
    const resultsOfPopularList = popularList.results;
    const popularCategory = { id: 1, name: 'Popular', listOfMovies: popularList.results };
    const myListCategory = { id: 0, name: 'MyList', listOfMovies: myList };
    const listOfCarousels = [myListCategory, popularCategory, ...listOfCategories];

    // This method draw an index from the list of popular movies and then take the id of the randomly selected movie
    const randomIdFromMostPopularTop10 =
      resultsOfPopularList[Math.floor(Math.random() * Math.min(10, resultsOfPopularList.length))]
        .id;
    const heroMovie = await getMovieById(randomIdFromMostPopularTop10);
    return {
      props: {
        heroMovie,
        listOfCarousels,
        pageLayout: { header: true, footer: true },
      },
    };
  } catch (e) {
    return { props: {} };
  }
}
