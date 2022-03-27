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

export default function Home({ listOfCategories, listOfHeroMovies }) {
  const { data: session } = useSession();
  const state = useActions({ isModalOpen: false, content: '' });
  const { isModalOpen, content } = state;

  return (
    <>
      {session?.user ? (
        <HomePage listOfCategories={listOfCategories} listOfHeroMovies={listOfHeroMovies} />
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
    const firstMovie = await getMovieById(508947);
    const secondMovie = await getMovieById(634649);
    const thirdMovie = await getMovieById(823625);
    const fourthMovie = await getMovieById(568124);
    const fifthMovie = await getMovieById(414906);
    const listOfHeroMovies = [
      { id: 1, movie: firstMovie },
      { id: 2, movie: secondMovie },
      { id: 3, movie: thirdMovie },
      { id: 4, movie: fourthMovie },
      { id: 5, movie: fifthMovie },
    ];
    const popularList = await getListOfPopularMovies(req);
    const popularCategory = { id: 1, name: 'Popular', listOfMovies: popularList.results };
    listOfCategories.unshift(popularCategory);

    return {
      props: {
        listOfHeroMovies,
        listOfCategories,
        pageLayout: { header: true, footer: false },
      },
    };
  } catch (e) {
    return { props: {} };
  }
}
