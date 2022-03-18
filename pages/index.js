import UserAvatar from 'components/UI/UserAvatar';
import { useSession } from 'next-auth/react';
import Modal from 'components/Modal';
import { useActions, openModal } from 'actions/app';
import Button from 'components/UI/Button';

export default function Home() {
  const { data: session } = useSession();
  const state = useActions({ isModalOpen: false, content: '' });
  const { isModalOpen, content } = state;
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
        <Button onClick={() => openModal(<h2>Modal</h2>)}>OpenModal</Button>
        {isModalOpen && <Modal content={content} />}
      </div>
    </main>
  );
}
