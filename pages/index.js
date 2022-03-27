import { useSession } from 'next-auth/react';
import Modal from 'components/Modal';
import { useActions, openModal } from 'actions/app';
import Button from 'components/UI/Button';
import HomePage from 'components/Pages/HomePage';
import {
  getListOfMoviesByCategoryId,
  getListOfPopularMovies,
  getMovieById,
} from 'server/services/movieDb';
import { genresList } from 'components/Pages/HomePage/genresList';

export default function Home({ listOfCategories, heroMovie }) {
  const { data: session } = useSession();
  const state = useActions({ isModalOpen: false, content: '' });
  const { isModalOpen, content } = state;

  return (
    <>
      {session?.user ? (
        <HomePage listOfCategories={listOfCategories} heroMovie={heroMovie} />
      ) : (
        <>Not signed in :(</>
      )}
      <Button onClick={() => openModal(<h2>Modal</h2>)}>OpenModal</Button>
      {isModalOpen && <Modal content={content} />}
    </>
  );
}

export async function getServerSideProps({ req }) {
  try {
    let Promise = require('promise');
    let listOfCategories = await Promise.all(
      genresList.map(async (category) => {
        const list = await getListOfMoviesByCategoryId(category.id);
        const listOfMovies = list.results;
        return { ...category, listOfMovies };
      })
    );

    const listOfHeroMoviesId = [508947, 634649, 696806, 568124, 414906];
    const chosenMovieId = listOfHeroMoviesId[Math.floor(Math.random() * listOfHeroMoviesId.length)];

    const heroMovie = await getMovieById(chosenMovieId);
    const popularList = await getListOfPopularMovies(req);
    const popularCategory = { id: 1, name: 'Popular', listOfMovies: popularList.results };
    listOfCategories.unshift(popularCategory);

    return {
      props: {
        heroMovie,
        listOfCategories,
        pageLayout: { header: true, footer: false },
      },
    };
  } catch (e) {
    return { props: {} };
  }
}
