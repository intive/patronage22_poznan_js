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
import { openModal } from 'actions/app';
import Account from 'components/Account';

export default function ActionMenu({ userData }) {
  return (
    <Wrapper>
      <UserInfo>
        <UserAvatar size={100} avatar={userData?.user.avatar} />
        <Username>{userData?.user.name}</Username>
      </UserInfo>
      <ActionList>
        <ListItem>
          <ActionBtn
            onlyIcon
            fullWidth
            onClick={() => {
              openModal(<Account />);
            }}
          >
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
