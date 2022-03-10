import Link from 'next/link';
import PropTypes from 'prop-types';
import { LinkStyle, MenuList } from './Nav.styles';
import { navData } from '../menuData';

const NavigationLink = ({ name, link }) => {
  return (
    <Link href={link}>
      <a>{name}</a>
    </Link>
  );
};
export const NavigationData = navData.map((navigationItem) => (
  <LinkStyle key={navigationItem.id}>
    <NavigationLink name={navigationItem.name} link={navigationItem.link} />
  </LinkStyle>
));
export const ListItems = ({ content, ...props }) => {
  return <MenuList {...props}>{content}</MenuList>;
};

ListItems.propTypes = {
  displayView: PropTypes.oneOf(['none', 'flex']),
  flexDirection: PropTypes.oneOf(['row', 'column']),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'strach', 'baseline']),
  backGroundColor: PropTypes.string,
};
