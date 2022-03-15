import Image from 'next/image';

import LogoLink from 'components/UI/LogoLink';
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
import { NavigationData } from './Nav';
import { MobileList, DesktopList } from './Nav/Nav.styles';
import { useActions, openMenu, closeMenu } from 'actions/headerActions';
import SearchMoviesInput from 'components/UI/SearchMoviesInput';

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
        <DesktopList>{NavigationData}</DesktopList>

        <UserPanel>
          <SearchMoviesInput />
          <UserImg>
            <Image src={userImg} alt="userImage" layout="fill" objectFit="contain" />
          </UserImg>
        </UserPanel>
        {state.isMenuOpen ? (
          <MobileMenuPanel>
            <MobileList>{NavigationData}</MobileList>
          </MobileMenuPanel>
        ) : null}
      </NavigationBar>
    </>
  );
}
