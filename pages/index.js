import UserAvatar from 'components/UI/UserAvatar';
import { useSession } from 'next-auth/react';
import { getListOfPopularMovies } from '../lib/services/movieDb';
import Modal from 'components/Modal';
import { useActions, openModal } from 'actions/app';
import Button from 'components/UI/Button';
import MoviePoster from 'components/UI/MoviePoster';

export default function Home({ popularMovies }) {
  const { data: session } = useSession();
  const state = useActions({ isModalOpen: false, content: '' });
  return (
    <main
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div>
        {session?.user ? (
          <>
            <UserAvatar size={200} />
            <br />
            Signed in as {session.user.name} - {session.user.email}
            <br />
            Account created at {new Date(session.user.createdAt).toDateString()}
          </>
        ) : (
          <>Not signed in :(</>
        )}
      </div>
      {popularMovies && <div>Popular movies: {popularMovies.join(', ')}</div>}
      <Button
        onClick={() =>
          openModal(
            <MoviePoster src={'https://image.tmdb.org/t/p/w342/yreqWiQ7IOkXWVB2Tz4LJIs7xqA.jpg'} />
          )
        }
      >
        OpenModal with Poster
      </Button>
      {state.isModalOpen && <Modal content={state.content} />}
    </main>
  );
}

export async function getServerSideProps({ req }) {
  try {
    const list = await getListOfPopularMovies(req);
    return { props: { popularMovies: list.results?.map((movie) => movie.title) } };
  } catch (e) {
    return { props: {} };
  }
}
