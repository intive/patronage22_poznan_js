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

export default function Header({ remove }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCarouselSection, setIsCarouselSection] = useState(false);
  const { data: session } = useSession();

  const avatar = session?.user?.avatar ?? null;

  window.onscroll = function () {
    if (window.pageYOffset < 460) {
      setIsCarouselSection(false);
    } else {
      setIsCarouselSection(true);
    }
  };
  return (
    <>
      {!isCarouselSection ? (
        <NavigationBar remove={remove}>
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
      ) : null}
      ;
    </>
  );
}
