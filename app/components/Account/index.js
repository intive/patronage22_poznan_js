import Button from 'components/UI/Button';
import UserAvatar from 'components/UI/UserAvatar';
import UserAvatarSelector from 'components/UserAvatarSelector';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import {
  AccountWrapper,
  EditAvatarButton,
  Email,
  FlexRow,
  Header,
  PencilIcon,
  Username,
} from './Account.styles';

export default function Account() {
  const { data: session } = useSession();

  const user = session?.user;
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const toggleIsEditingAvatar = () => {
    setIsEditingAvatar(!isEditingAvatar);
    setSelectedAvatar(user.avatar);
  };

  useEffect(() => {
    if (user) {
      setSelectedAvatar(user.avatar);
    }
  }, [user]);

  if (!user) {
    return (
      <AccountWrapper>
        <Header>Account</Header>
        Not signed in :(
      </AccountWrapper>
    );
  }

  return (
    <AccountWrapper>
      <Header>Account</Header>
      <section>
        <EditAvatarButton
          onlyIcon
          onClick={toggleIsEditingAvatar}
          $isEditingAvatar={isEditingAvatar}
        >
          <UserAvatar size={200} avatar={selectedAvatar} />
          <PencilIcon />
        </EditAvatarButton>
      </section>
      {!isEditingAvatar && (
        <>
          {user.name && <Username>{user.name}</Username>}
          {user.email && <Email>{user.email}</Email>}
          {user.createdAt && (
            <section>with us since {new Date(user.createdAt).toDateString()}</section>
          )}
          <FlexRow>
            <Button onClick={signOut}>Log Out</Button>
          </FlexRow>
        </>
      )}
      {isEditingAvatar && (
        <section>
          <UserAvatarSelector
            selectedAvatar={selectedAvatar}
            setSelectedAvatar={setSelectedAvatar}
          />
          <FlexRow>
            <Button primary onClick={() => alert('I wish I could')}>
              Save
            </Button>
            <Button onClick={toggleIsEditingAvatar}>Cancel</Button>
          </FlexRow>
        </section>
      )}
    </AccountWrapper>
  );
}
