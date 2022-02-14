import Link from 'next/link';
import {
  DesktopMenuList,
  MobileMenuList,
  LinkStyle,
  DesktopLinkStyle,
  LinkWrapper,
} from './headerStyle';
import { navData } from './menuData';

const NavigationLink = ({ name, link }) => {
  return (
    <LinkWrapper>
      <Link href={link} passHref>
        {name}
      </Link>
    </LinkWrapper>
  );
};

export const MainNav = () => {
  return (
    <>
      <DesktopMenuList>
        {navData.map((navigationItem) => (
          <DesktopLinkStyle key={navigationItem.id}>
            <NavigationLink name={navigationItem.name} link={navigationItem.link} />
          </DesktopLinkStyle>
        ))}
      </DesktopMenuList>
    </>
  );
};
export const MobileNav = () => {
  return (
    <>
      <MobileMenuList>
        {navData.map((navigationItem) => (
          <LinkStyle key={navigationItem.id}>
            <NavigationLink name={navigationItem.name} link={navigationItem.link} />
          </LinkStyle>
        ))}
      </MobileMenuList>
    </>
  );
};
