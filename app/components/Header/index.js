import { MainNav, MobileNav } from './Nav';
import { mobileMenu, userImg } from './menuData';
import {
  MainNavigationBar,
  UserPanel,
  MobileMenuBtn,
  UserImg,
  NavigationBar,
  ShowAccount,
} from './Header.styles';
import LogoLink from 'components/LogoLink';
import Icon from 'components/Icon';

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
          {/* TODO search input */}
          <UserImg>{userImg}</UserImg>
          <ShowAccount>
            <Icon type="sort-down" />
          </ShowAccount>
        </UserPanel>
        {isMobileMenuVisible ? <MobileNav /> : null}
      </NavigationBar>
    </>
  );
}
