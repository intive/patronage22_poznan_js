import PropTypes from 'prop-types';
import { mockLinks } from './mockLists';
import { FooterWrapper, CopyrightParagraph, ResourcesParagraph } from './Footer.styles';
import IconsList from 'components/List/IconsList';
import LinksList from 'components/List/LinksList';

export default function Footer({ ...props }) {
  return (
    <FooterWrapper {...props}>
      <IconsList />
      <LinksList links={mockLinks} />
      <CopyrightParagraph>© 2022 InTiVi</CopyrightParagraph>
      <ResourcesParagraph>
        <a href="https://www.flaticon.com/packs/avatars-54?word=avatar" title="Avatars">
          Avatar icons created by Freepik - Flaticon
        </a>
      </ResourcesParagraph>
    </FooterWrapper>
  );
}

Footer.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};
