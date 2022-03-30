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
} from './Header.styles';
import { HiddenOverflow } from 'consts/bodystyles';
import { NavigationData } from './Nav';
import { MobileList, DesktopList } from './Nav/Nav.styles';
import SearchMoviesInput from 'components/UI/SearchMoviesInput';
import UserAvatar from 'components/UI/UserAvatar';
import { useSession } from 'next-auth/react';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const { data: session } = useSession();

  const avatar = session?.user?.avatar ?? null;

  window.onscroll = function () {
    if (window.pageYOffset < 450) {
      setIsClosed(false);
    } else {
      setIsClosed(true);
    }
  };
  return (
    <>
      <NavigationBar isClosed={isClosed}>
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
          <UserAvatar avatar={avatar} />
        </UserPanel>
        {isMenuOpen ? (
          <>
            <HiddenOverflow />
            <MobileMenuPanel>
              <MobileList>{NavigationData}</MobileList>
            </MobileMenuPanel>
          </>
        ) : null}
      </NavigationBar>
    </>
  );
}
