import PropTypes from 'prop-types';
import { LinkItem, ListOfLinks } from './LinksList.styles';
import { mockLinks } from 'components/Footer/mockLists';

export default function LinksList({ ...props }) {
  function Item(props) {
    return <LinkItem>{props.value}</LinkItem>;
  }

  function List(props) {
    const links = props.links;
    const listItems = links.map((link) => <Item key={link.id} value={link.displayLink} />);
    return <ListOfLinks {...props}>{listItems}</ListOfLinks>;
  }
  return <List links={mockLinks} {...props} />;
}

LinksList.propTypes = {
  gridTemplateColumns: PropTypes.string,
  columnGap: PropTypes.string,
  rowGap: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
};
