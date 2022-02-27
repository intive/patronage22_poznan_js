import NavButton from '.';

export default {
  title: 'UI/Carousel',
  component: NavButton,
  argTypes: { onClick: { action: 'onClick' } },
};

const Template = ({ ...args }) => <NavButton {...args} />;

export const LeftButton = Template.bind({});
LeftButton.args = {
  backgroundColor: 'grey',
  color: '#fff',
  type: 'chevron-left',
};

export const RightButton = Template.bind({});
RightButton.args = {
  backgroundColor: 'grey',
  color: '#fff',
  type: 'chevron-right',
};
