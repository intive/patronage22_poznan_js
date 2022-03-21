// import UserAvatar from 'components/UI/UserAvatar';
import { useSession } from 'next-auth/react';
import Modal from 'components/Modal';
import { useActions, openModal } from 'actions/app';
import Button from 'components/UI/Button';
// import MovieCard from 'components/UI/MovieCard';
// import withAuth from 'server/withAuth';
// import handler from '../pages/api/movies/popular';
import HomePage from 'components/Pages/HomePage';
import { getListOfPopularMovies } from 'server/services/movieDb';
import { getListOfMoviesByCategoryId } from 'server/services/movieDb';
// import Carousel from 'components/Carousel';
// import MovieCard from 'components/UI/MovieCard';

export default function Home({
  popularMovies,
  comedyList,
  dramaList,
  horrorList,
  familyList,
  romanceList,
}) {
  const { data: session } = useSession();
  const state = useActions({ isModalOpen: false, content: '' });
  const { isModalOpen, content } = state;
  // console.log(popularMovies[0].images.poster.original);
  // const listOfCategories = [];
  return (
    <div>
      {session?.user ? (
        <HomePage
          popularMovies={popularMovies}
          comedyList={comedyList}
          romanceList={romanceList}
          dramaList={dramaList}
          horrorList={horrorList}
          familyList={familyList}
        />
      ) : (
        <>Not signed in :(</>
      )}
      <Button onClick={() => openModal(<h2>Modal</h2>)}>OpenModal</Button>
      {isModalOpen && <Modal content={content} />}
    </div>
  );
}

export async function getServerSideProps({ req }) {
  try {
    const popularList = await getListOfPopularMovies(req);
    const comedyList = await getListOfMoviesByCategoryId(35);
    const romanceList = await getListOfMoviesByCategoryId(10749);
    const dramaList = await getListOfMoviesByCategoryId(18);
    const horrorList = await getListOfMoviesByCategoryId(27);
    const familyList = await getListOfMoviesByCategoryId(10751);
    return {
      props: {
        popularMovies: popularList.results,
        comedyList: comedyList.results,
        romanceList: romanceList.results,
        dramaList: dramaList.results,
        horrorList: horrorList.results,
        familyList: familyList.results,
        pageLayout: { header: true, footer: false },
      },
    };
  } catch (e) {
    return { props: {} };
  }
}
