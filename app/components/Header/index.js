import Image from 'next/image';

import LogoLink from 'components/LogoLink';
import userImg from '/public/Rectangle 10@2x.png';
import iconMenu from '/public/Time.svg';
import union from '/public/Union.svg';
import {
  UserPanel,
  MainPanel,
  UserImg,
  NavigationBar,
  MobileMenuBtn,
  MobileMenuPanel,
} from './Header.styles';
import { Navigation } from './Nav';
import { useActions, openMenu, closeMenu } from 'actions/headerActions';

export default function Header() {
  const state = useActions({ isMenuOpen: false });
  return (
    <>
      <NavigationBar>
        <MainPanel>
          {state.isMenuOpen ? (
            <MobileMenuBtn onClick={closeMenu}>
              <Image src={union} alt="union" layout="fill" objectFit="contain" />
            </MobileMenuBtn>
          ) : (
            <MobileMenuBtn onClick={openMenu}>
              <Image src={iconMenu} alt="time" layout="fill" objectFit="contain" />
            </MobileMenuBtn>
          )}
          <LogoLink />
        </MainPanel>
        <Navigation alignItems="center" flexDirection="row" justifyContent="center" />

        <UserPanel>
          {/* TODO search input */}
          <UserImg>
            <Image src={userImg} alt="userImage" layout="fill" objectFit="contain" />
          </UserImg>
        </UserPanel>
      </NavigationBar>
      {state.isMenuOpen ? (
        <MobileMenuPanel>
          <Navigation
            displayView="flex"
            alignItems="flex-start"
            flexDirection="column"
            justifyContent="flex-start"
          />
        </MobileMenuPanel>
      ) : null}
    </>
  );
}
