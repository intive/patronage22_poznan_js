import Link from 'next/link';
import { DesktopMenuList, MobileMenuList, LinkStyle, LinkWrapper } from './Nav.styles';
import { navData } from '../menuData';

const NavigationLink = ({ name, link }) => {
  return (
    <LinkWrapper>
      <Link href={link} passHref>
        {name}
      </Link>
    </LinkWrapper>
  );
};
const NavigationData = navData.map((navigationItem) => (
  <LinkStyle key={navigationItem.id}>
    <NavigationLink name={navigationItem.name} link={navigationItem.link} />
  </LinkStyle>
));

export const MainNav = () => <DesktopMenuList>{NavigationData}</DesktopMenuList>;

export const MobileNav = () => <MobileMenuList>{NavigationData}</MobileMenuList>;
