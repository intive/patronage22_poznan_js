import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { device } from './breakpoints'

export default function Footer() {
  const mockLinks = [
    'Audio and Subtitles',
    'Audio Description',
    'Help Center',
    'Gift Cards',
    'Media Center',
    'Investor Relations',
    'Jobs',
    'Terms of Use',
    'Privacy',
    'Legal Notices',
    'Cookie Preferences',
    'Corporate Information',
    'Contact Us'];

  function Item(props) {
    return <ListItem><a>{props.value}</a></ListItem>;
  }

  function List(props) {
    const links = props.links;
    const listItems = links.map((link, index) =>
      <Item key={index} value={link} />
    );
    return (
      <LinksList>
        {listItems}
      </LinksList>
    );
  }

  return (
    <FooterWrapper>
      <IconWrapper>
        <FontAwesomeItem> <FontAwesomeIcon icon={faFacebookF} /> </FontAwesomeItem>
        <FontAwesomeItem> <FontAwesomeIcon icon={faInstagram} /> </FontAwesomeItem>
        <FontAwesomeItem> <FontAwesomeIcon icon={faTwitter} /> </FontAwesomeItem>
        <FontAwesomeItem> <FontAwesomeIcon icon={faYoutube} /> </FontAwesomeItem>
      </IconWrapper>
      <List links={mockLinks} />
      <p style={{ fontSize: "0.8rem", marginLeft: "2.40rem", marginTop: "2rem" }}>© 2022 InTiVi</p>
    </FooterWrapper>
  );
}

export const FooterWrapper = styled.footer`
  display: grid;
  justify-content: flex-start;
  width: 100%;
  font-weight: 600;
  color: #5e5d5d;
  background-color: #000000;
  @media ${device.tablet} {
    justify-content: center;
  }
`;

export const IconWrapper = styled.ul`
  display: flex;
  margin-left: 0.4rem;
  margin-top: 4rem;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  color: #FFFFFF;
  list-style-type: none;
`;

export const FontAwesomeItem = styled.li`
  margin-right: 2rem;
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }
`;

export const LinksList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  row-gap: 1.1rem;
  font-size: 0.9rem;
  list-style-type: none;
  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 10rem;
  }
  @media ${device.tablet} {
    column-gap: 8rem;
    font-size: 1rem;
  }
`;

export const ListItem = styled.li`
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
`;
