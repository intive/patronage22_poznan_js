import Image from 'next/image';
import { Avatar } from './UserAvatar.styles';

// useSession prop is passed in stories only to mock user session, do not use in app
export default function UserAvatar({ size = 40, avatar, ...props }) {
  return (
    <Avatar size={size} blank={!avatar} {...props}>
      {Boolean(avatar) && (
        <Image
          src={`/images/avatars/${avatar}.png`}
          layout="fill"
          objectFit="contain"
          alt="User avatar"
        />
      )}
    </Avatar>
  );
}
