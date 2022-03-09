import Link from 'next/link';
import PropTypes from 'prop-types';
import { LinkStyle, MenuList } from './Nav.styles';
import { navData } from '../menuData';

export const Navigation = ({ ...props }) => {
  const NavigationLink = ({ name, link }) => {
    return (
      <Link href={link} passHref>
        <a>{name}</a>
      </Link>
    );
  };
  const NavigationData = navData.map((navigationItem) => (
    <LinkStyle key={navigationItem.id}>
      <NavigationLink name={navigationItem.name} link={navigationItem.link} />
    </LinkStyle>
  ));

  return <MenuList {...props}>{NavigationData}</MenuList>;
};

Navigation.propTypes = {
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
  backgroundColor: PropTypes.string,
};
