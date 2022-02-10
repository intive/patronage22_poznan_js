import { MainNav, MobileNav } from './Nav';
import { pageName, mobileMenu, userImg } from './menuData';
import {
  MainNavigationBar,
  LogoName,
  SecondNavigationBar,
  MobileMenuBtn,
  UserImg,
  NavigationBar,
} from './headerStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

export default function Header() {
  const [showMobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <NavigationBar>
        <MainNavigationBar>
          <LogoName>{pageName}</LogoName>
          <MobileMenuBtn onClick={() => setMobileMenu(!showMobileMenu)}>{mobileMenu}</MobileMenuBtn>
          <MainNav />
        </MainNavigationBar>
        <SecondNavigationBar>
          {/* TODO search input */}
          <UserImg>{userImg}</UserImg>
          <FontAwesomeIcon
            icon={faSortDown}
            style={{ fontSize: '25px', paddingBottom: '5px', color: 'white' }}
          />
        </SecondNavigationBar>
      </NavigationBar>
      {showMobileMenu ? <MobileNav /> : null}
    </>
  );
}
