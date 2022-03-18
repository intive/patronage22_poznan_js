import UserAvatar from 'components/UI/UserAvatar';
import { useSession } from 'next-auth/react';

export default function Home() {
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
    </main>
  );
}
