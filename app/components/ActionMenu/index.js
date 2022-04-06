import { signOut } from 'next-auth/react';
import {
  Wrapper,
  UserInfo,
  Username,
  ActionList,
  ListItem,
  ActionBtn,
  LogOutBtn,
} from './ActionMenu.styles';
import UserAvatar from 'components/UI/UserAvatar';
import Icon from '../UI/Icon';

export default function ActionMenu({ userData, reference }) {
  return (
    <Wrapper ref={reference}>
      <UserInfo>
        <UserAvatar size={100} avatar={userData?.user.avatar} />
        <Username>{userData?.user.name}</Username>
      </UserInfo>
      <ActionList>
        <ListItem>
          <ActionBtn onlyIcon fullWidth onClick={() => {}}>
            Account
            <Icon size="lg" rotation={270} type="arrow-down" />
          </ActionBtn>
        </ListItem>
      </ActionList>
      <LogOutBtn fullWidth onClick={signOut}>
        Log out
      </LogOutBtn>
    </Wrapper>
  );
}
