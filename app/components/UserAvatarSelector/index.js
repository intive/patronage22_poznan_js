import avatars from 'consts/avatars';
import Button from 'components/UI/Button';
import UserAvatar from 'components/UI/UserAvatar';
import { GridWrapper } from './UserAvatarSelector.styles';

export default function UserAvatarSelector({ selectedAvatar, setSelectedAvatar }) {
  return (
    <GridWrapper>
      {avatars.map((id) => (
        <Button
          key={`avatar-key-${id}`}
          onlyIcon
          onClick={() => setSelectedAvatar(id)}
          style={{ margin: '5px' }}
        >
          <UserAvatar selected={selectedAvatar === id} avatar={id} size={60} />
        </Button>
      ))}
    </GridWrapper>
  );
}
