import { useSession } from 'next-auth/react';
import { getMyList } from 'server/services/myListClient';
import HomePage from 'components/Pages/HomePage';
import {
  getListOfMoviesByCategoryId,
  getListOfPopularMovies,
  getMovieById,
} from 'server/services/movieDb';
import { genresList } from 'components/Pages/HomePage/genresList';
import StartPage from 'components/Pages/StartPage';

export default function Home({ listOfCarousels, heroMovie }) {
  const { data: session } = useSession();
  return (
    <>
      {session?.user ? (
        <HomePage listOfCarousels={listOfCarousels} heroMovie={heroMovie} />
      ) : (
        <StartPage />
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

    const myList = await getMyList(req);
    const popularList = await getListOfPopularMovies(req);
    const resultsOfPopularList = popularList.results;
    const popularCategory = { id: 1, name: 'Popular', listOfMovies: popularList.results };
    const listOfCarousels = myList?.length
      ? [{ id: 0, name: 'My List', listOfMovies: myList }, popularCategory, ...listOfCategories]
      : [popularCategory, ...listOfCategories];

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
