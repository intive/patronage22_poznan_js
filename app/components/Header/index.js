import { MainNav, MobileNav } from './nav';
import { pageName, mobileMenu, userImg } from './menuData';
import {
  MainNavigationBar,
  LogoName,
  SecondNavigationBar,
  MobileMenuBtn,
  UserImg,
  NavigationBar,
} from './headerStyle';

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
          {/* TODO waiting for icons */}
        </SecondNavigationBar>
      </NavigationBar>
      {showMobileMenu ? <MobileNav /> : null}
    </>
  );
}
