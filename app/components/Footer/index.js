import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mockLinks, mockIcons } from './mockLists';
import {
  FooterWrapper,
  IconList,
  IconWrapper,
  LinksList,
  LinkItem,
  CopyrightParagraph,
} from './footerStyle';

export default function Footer() {
  function Item(props) {
    return <LinkItem>{props.value}</LinkItem>;
  }

  function List(props) {
    const links = props.links;
    const listItems = links.map((link) => <Item key={link.id} value={link.displayLink} />);
    return <LinksList>{listItems}</LinksList>;
  }

  return (
    <FooterWrapper>
      <IconList>
        {mockIcons.map((icon) => (
          <IconWrapper key={icon.id}>
            <FontAwesomeIcon icon={icon.icon} />
          </IconWrapper>
        ))}
      </IconList>
      <List links={mockLinks} />
      <CopyrightParagraph>© 2022 InTiVi</CopyrightParagraph>
    </FooterWrapper>
  );
}
