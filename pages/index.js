import UserAvatar from 'components/UI/UserAvatar';
import { useSession } from 'next-auth/react';
import { getListOfPopularMovies } from '../lib/services/movieDb';

export default function Home({ popularMovies }) {
  const { data: session } = useSession();
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
