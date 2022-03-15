import { MainNav, MobileNav } from './Nav';
import { mobileMenu, userImg } from './menuData';
import { MainNavigationBar, UserPanel, MobileMenuBtn, UserImg, NavigationBar } from './headerStyle';
import LogoLink from 'components/UI/LogoLink';
import SearchMoviesInput from 'components/UI/SearchMoviesInput';

import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';

export default function Header() {
  const [isMobileMenuVisible, setMobileMenu] = useState(false);
  const { data: session } = useSession();
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
          {session.user?.name}
          <UserImg onClick={() => signOut()}>{userImg}</UserImg>
        </UserPanel>
      </NavigationBar>
      {isMobileMenuVisible ? <MobileNav /> : null}
    </>
  );
}
