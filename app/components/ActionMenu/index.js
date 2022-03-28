import { Wrapper, UserInfo, ActionList, ActionBtn } from './ActionMenu.styles';
import Button from '../UI/Button';
import { useSession as useSessionActual } from 'next-auth/react';
import UserAvatar from 'components/UI/UserAvatar';
import Icon from '../UI/Icon';
import Modal from 'components/Modal';
import { useActions, openModal } from 'actions/app';

export default function ActionMenu({ isOpen, useSession = useSessionActual }) {
  const { data: session } = useSession();
  const state = useActions({ isModalOpen: false, content: '' });
  const { isModalOpen, content } = state;

  return (
    <>
      <Wrapper>
        <UserInfo>
          {session?.user ? (
            <>
              <UserAvatar size={100} />
              <div className="username">{session.user.name}</div>
            </>
          ) : (
            <>Not signed in :(</>
          )}
        </UserInfo>
        <ActionList>
          <ActionBtn onlyIcon fullWidth onClick={() => openModal(<h2>Account</h2>)}>
            Account
            <Icon size="lg" rotation={270} type="arrow-down" />
          </ActionBtn>
        </ActionList>
        {isModalOpen && <Modal content={content} />}
        <Button fullWidth href="#">
          Log out
        </Button>
      </Wrapper>
    </>
  );
}
