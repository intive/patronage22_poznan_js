import { MainNav, MobileNav } from './Nav';
import { mobileMenu, userImg } from './menuData';
import {
  MainNavigationBar,
  UserPanel,
  MobileMenuBtn,
  UserImg,
  NavigationBar,
  ShowAccount,
} from './Header.styles';
import { useActions, openMenu, closeMenu } from 'actions/headerActions';

export default function Header() {
  const state = useActions({ isMenuOpen: true });
  return (
    <>
      <NavigationBar>
          {state.isMenuOpen ? (
            <MobileMenuBtn onClick={() => openMenu}>
              <OpenMenuIcon type="chevron-left" />
              <Image src={iconMenu} alt="time" layout="fill" objectFit="contain" />
          </MobileMenuBtn>
          ) : (
            <MobileMenuBtn onClick={() => closeMenu}>
              <Image src={iconMenu} alt="time" layout="fill" objectFit="contain" />
            </MobileMenuBtn>
          )}
        <UserPanel>
          {/* TODO search input */}
          <UserImg>{userImg}</UserImg>
          <ShowAccount>
            <Icon type="sort-down" />
          </ShowAccount>
        </UserPanel>
        {isMobileMenuVisible ? <MobileNav /> : null}
      </NavigationBar>
    </>
  );
}
