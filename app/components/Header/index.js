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
import { ListItems, NavigationData } from './Nav';
import { useActions, openMenu, closeMenu } from 'actions/headerActions';
import { useEffect, useState } from 'react';

export default function Header() {
  const state = useActions({ isMenuOpen: false });
  const [isDesctopMenuVisable, setDesctopMenuVisable] = useState(false);

  useEffect(() => {
    const menuVisable = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 1024) {
        setDesctopMenuVisable(!isDesctopMenuVisable);
      }
    };
    <NavigationBar />;
    menuVisable();
  }, []);

  return (
    <>
      <NavigationBar>
        <MainPanel>
          {!isDesctopMenuVisable ? (
            state.isMenuOpen ? (
              <MobileMenuBtn onClick={closeMenu}>
                <Image src={union} alt="union" layout="fill" objectFit="contain" />
              </MobileMenuBtn>
            ) : (
              <MobileMenuBtn onClick={openMenu}>
                <Image src={iconMenu} alt="time" layout="fill" objectFit="contain" />
              </MobileMenuBtn>
            )
          ) : null}
          <LogoLink />
        </MainPanel>
        {isDesctopMenuVisable ? (
          <ListItems
            alignItems="center"
            flexDirection="row"
            justifyContent="center"
            backGroundColor="transparent"
            content={NavigationData}
          />
        ) : null}
        <UserPanel>
          {/* TODO search input */}
          <UserImg>
            <Image src={userImg} alt="userImage" layout="fill" objectFit="contain" />
          </UserImg>
        </UserPanel>
        {state.isMenuOpen ? (
          <MobileMenuPanel>
            <ListItems
              alignItems="flex-start"
              flexDirection="column"
              justifyContent="flex-start"
              backGroundColor="transparent"
              content={NavigationData}
            />
          </MobileMenuPanel>
        ) : null}
      </NavigationBar>
    </>
  );
}
