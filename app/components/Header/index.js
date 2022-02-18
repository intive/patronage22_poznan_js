import { MainNav, MobileNav } from './Nav';
import { mobileMenu, userImg } from './menuData';
import {
  MainNavigationBar,
  UserPanel,
  MobileMenuBtn,
  UserImg,
  NavigationBar,
  ShowAccount,
} from './headerStyle';
import LogoLink from 'components/UI/LogoLink';
import Icon from 'components/Icon';
import { SearchMoviesInput } from '../SearchMoviesInput/SearchMoviesInput';

import { useState } from 'react';

export default function Header() {
  const [isMobileMenuVisible, setMobileMenu] = useState(false);
  return (
    <>
      <NavigationBar>
        <MainNavigationBar>
          <LogoLink />
          <MobileMenuBtn onClick={() => setMobileMenu(!isMobileMenuVisible)}>
            {mobileMenu}
          </MobileMenuBtn>
          <MainNav />
        </MainNavigationBar>
        <UserPanel>
          <SearchMoviesInput />
          <UserImg>{userImg}</UserImg>
          <ShowAccount>
            <Icon type="sort-down" />
          </ShowAccount>
        </UserPanel>
      </NavigationBar>
      {isMobileMenuVisible ? <MobileNav /> : null}
    </>
  );
}
