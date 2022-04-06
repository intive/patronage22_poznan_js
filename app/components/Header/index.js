import { useState, useRef } from 'react';
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
import Button from 'components/UI/Button';
import ActionMenu from 'components/ActionMenu';
import { CloseMenuBtn } from 'components/ActionMenu/ActionMenu.styles';
import Icon from 'components/UI/Icon';
import useOnClickOutside from 'hooks/useOnClickOutside';
import { useSession } from 'next-auth/react';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isActionMenuOpen, setActionMenuOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const { data: session } = useSession();

  const containerRef = useRef();

  const avatar = session?.user?.avatar ?? null;

  window.onscroll = function () {
    setActionMenuOpen(false);
    if (window.pageYOffset < 450) {
      setIsClosed(false);
    } else {
      setIsClosed(true);
    }
  };

  const handleActionMenuOpen = () => {
    setActionMenuOpen(!isActionMenuOpen);
  };

  useOnClickOutside(containerRef, () => {
    setActionMenuOpen(false);
  });

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
          <Button onlyIcon onClick={handleActionMenuOpen}>
            <UserAvatar avatar={avatar} />
          </Button>
          {isActionMenuOpen && (
            <>
              <CloseMenuBtn iconWithBg onClick={handleActionMenuOpen}>
                <Icon size="2x" type="x-mark" />
              </CloseMenuBtn>
              <ActionMenu userData={session} reference={containerRef} />
            </>
          )}
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
