import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <main
      style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {session?.user ? (
        <>
          Signed in as {session.user.name} - {session.user.email}
        </>
      ) : (
        <>Not signed in :(</>
      )}
    </main>
  );
}
