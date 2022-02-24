import IconsList from './';

export default {
  title: 'List/IconsList',
  component: IconsList,
};

const Template = ({ ...args }) => <IconsList {...args} />;

export const HorizontalIconsList = Template.bind({});
HorizontalIconsList.args = {
  flexDirection: 'row',
  backgroundColor: '#000000',
  color: '#ffffff',
};

export const VerticalIconsList = Template.bind({});
VerticalIconsList.args = {
  flexDirection: 'column',
  backgroundColor: '#000000',
  color: '#ffffff',
};

export const CustomIconsList = Template.bind({});
CustomIconsList.args = {
  backgroundColor: 'salmon',
  color: 'blue',
  fontSize: '3rem',
  flexDirection: 'row',
};
