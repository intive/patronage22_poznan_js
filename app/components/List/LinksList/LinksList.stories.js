import LinksList from './';

export default {
  title: 'List/LinksList',
  component: LinksList,
};

const Template = ({ ...args }) => <LinksList {...args} />;

export const MobileLinksList = Template.bind({});
MobileLinksList.args = {
  gridTemplateColumns: '1fr 1fr',
  columnGap: '3rem',
  backgroundColor: '#000000',
  color: '#5e5d5d',
};

export const DesktopLinksList = Template.bind({});
DesktopLinksList.args = {
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  columnGap: '2.3rem',
  backgroundColor: '#000000',
  color: '#5e5d5d',
};

export const CustomLinksList = Template.bind({});
CustomLinksList.args = {
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  columnGap: '2.3rem',
  rowGap: '1.1rem',
  fontSize: '0.9rem',
  backgroundColor: '#000000',
  color: 'salmon',
};
