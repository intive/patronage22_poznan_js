import PropTypes from 'prop-types';
import { mockLinks } from './mockLists';
import { FooterWrapper, CopyrightParagraph } from './Footer.styles';
import IconsList from 'components/List/IconsList';
import LinksList from 'components/List/LinksList';

export default function Footer({ ...props }) {
  return (
    <FooterWrapper {...props}>
      <IconsList />
      <LinksList links={mockLinks} />
      <CopyrightParagraph>© 2022 InTiVi</CopyrightParagraph>
    </FooterWrapper>
  );
}

Footer.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};
