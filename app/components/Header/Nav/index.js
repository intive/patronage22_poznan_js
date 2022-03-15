import Link from 'next/link';
import { LinkStyle } from './Nav.styles';
import { navData } from '../menuData';

const NavigationLink = ({ name, link, icon }) => {
  return (
    <Link href={link}>
      <a>{name || icon}</a>
    </Link>
  );
};
export const NavigationData = navData.map((navigationItem) => (
  <LinkStyle key={navigationItem.id}>
    <NavigationLink name={navigationItem.name || navigationItem.icon} link={navigationItem.link} />
  </LinkStyle>
));
