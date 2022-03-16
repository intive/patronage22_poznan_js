import { useSession as useSessionActual } from 'next-auth/react';
import Image from 'next/image';
import { Avatar } from './UserAvatar.styles';

// useSession prop is passed in stories only to mock user session, do not use in app
export default function UserAvatar({ size = 40, useSession = useSessionActual }) {
  const { data: session = {} } = useSession();

  const avatarSrc = `/images/avatars/${session.user?.avatar}.png`;

  return (
    <Avatar size={size} blank={!session.user}>
      {session.user?.avatar && (
        <Image src={avatarSrc} layout="fill" objectFit="contain" alt="User avatar" />
      )}
    </Avatar>
  );
}
