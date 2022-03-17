import { useState } from 'react';
import Image from 'next/image';

import LogoLink from 'components/UI/LogoLink';
import iconMenu from '/public/time.svg';
import union from '/public/union.svg';
import {
  UserPanel,
  MainPanel,
  NavigationBar,
  MobileMenuBtn,
  MobileMenuPanel,
  GlobalStyle,
} from './Header.styles';
import { NavigationData } from './Nav';
import { MobileList, DesktopList } from './Nav/Nav.styles';
import SearchMoviesInput from 'components/UI/SearchMoviesInput';
import UserAvatar from 'components/UI/UserAvatar';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <NavigationBar>
        <MainPanel>
          {isMenuOpen ? (
            <MobileMenuBtn onClick={() => setMenuOpen(!isMenuOpen)}>
              <Image src={union} alt="union" layout="fill" objectFit="contain" />
            </MobileMenuBtn>
          ) : (
            <MobileMenuBtn onClick={() => setMenuOpen(!isMenuOpen)}>
              <Image src={iconMenu} alt="time" layout="fill" objectFit="contain" />
            </MobileMenuBtn>
          )}
          <LogoLink />
        </MainPanel>
        <DesktopList>{NavigationData}</DesktopList>
        <UserPanel>
          <SearchMoviesInput />
          <UserAvatar />
        </UserPanel>
        {isMenuOpen ? (
          <>
            <GlobalStyle />
            <MobileMenuPanel>
              <MobileList>{NavigationData}</MobileList>
            </MobileMenuPanel>
          </>
        ) : null}
      </NavigationBar>
    </>
  );
}
