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
import LogoLink from 'components/LogoLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon icon={faSortDown} />
          </ShowAccount>
        </UserPanel>
      </NavigationBar>
      {isMobileMenuVisible ? <MobileNav /> : null}
    </>
  );
}
