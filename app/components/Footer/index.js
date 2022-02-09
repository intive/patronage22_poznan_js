import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const mockLinks = [
    {
      id: 1,
      displayLink: 'Audio and Subtitles'
    },
    {
      id: 2,
      displayLink: 'Audio Description'
    },
    {
      id: 3,
      displayLink: 'Help Center'
    },
    {
      id: 4,
      displayLink: 'Gift Cards'
    },
    {
      id: 5,
      displayLink: 'Media Center'
    },
    {
      id: 6,
      displayLink: 'Investor Relations'
    },
    {
      id: 7,
      displayLink: 'Jobs'
    },
    {
      id: 8,
      displayLink: 'Terms of Use'
    },
    {
      id: 9,
      displayLink: 'Privacy'
    },
    {
      id: 10,
      displayLink: 'Legal Notices'
    },
    {
      id: 11,
      displayLink: 'Cookie Preferences'
    },
    {
      id: 12,
      displayLink: 'Corporate Information'
    },
    {
      id: 13,
      displayLink: 'Contact Us'
    }
  ];

  function Item(props) {
    return <LinkItem>{props.value}</LinkItem>;
  }

  function List(props) {
    const links = props.links;
    const listItems = links.map((link) =>
      <Item key={link.id} value={link.displayLink} />
    );
    return (
      <LinksList>
        {listItems}
      </LinksList>
    );
  }

  return (
    <FooterWrapper>
      <IconList>
        <IconWrapper> <FontAwesomeIcon icon={faFacebookF} /> </IconWrapper>
        <IconWrapper> <FontAwesomeIcon icon={faInstagram} /> </IconWrapper>
        <IconWrapper> <FontAwesomeIcon icon={faTwitter} /> </IconWrapper>
        <IconWrapper> <FontAwesomeIcon icon={faYoutube} /> </IconWrapper>
      </IconList>
      <List links={mockLinks} />
      <CopyrightParagraph>© 2022 InTiVi</CopyrightParagraph>
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
  @media (min-width: 768px) {
    justify-content: center;
  }
`;

export const IconList = styled.ul`
  display: flex;
  margin-left: 0.4rem;
  margin-top: 4rem;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  color: #ffffff;
  list-style-type: none;
`;

export const IconWrapper = styled.li`
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
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 2.3rem;
  }
`;

export const LinkItem = styled.li`
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
`;

export const CopyrightParagraph = styled.p`
  font-size: 0.8rem;
  margin-left: 2.40rem;
  margin-top: 2rem
`;
