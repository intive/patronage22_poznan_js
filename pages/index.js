import { useSession } from 'next-auth/react';
import Modal from 'components/Modal';
import { useActions, openModal } from 'actions/app';
import Button from 'components/UI/Button';
import HomePage from 'components/Pages/HomePage';
import { getListOfMoviesByCategoryId, getListOfPopularMovies } from 'server/services/movieDb';
import { genresList } from 'components/Pages/HomePage/genresList';

export default function Home({ listOfCategories }) {
  const { data: session } = useSession();
  const state = useActions({ isModalOpen: false, content: '' });
  const { isModalOpen, content } = state;

  return (
    <div>
      {session?.user ? <HomePage listOfCategories={listOfCategories} /> : <>Not signed in :(</>}
      <Button onClick={() => openModal(<h2>Modal</h2>)}>OpenModal</Button>
      {isModalOpen && <Modal content={content} />}
    </div>
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

    const popularList = await getListOfPopularMovies(req);
    const popularCategory = { id: 1, name: 'Popular', listOfMovies: popularList.results };
    listOfCategories.unshift(popularCategory);

    return {
      props: {
        listOfCategories,
        pageLayout: { header: true, footer: false },
      },
    };
  } catch (e) {
    return { props: {} };
  }
}
