import Button from '.';

export default {
  title: 'UI/Carousel',
  component: Button,
  argTypes: { onClick: { action: 'onClick' } },
};

const Template = ({ ...args }) => <Button {...args} />;

export const LeftButton = Template.bind({});
LeftButton.args = {
  backgroundColor: 'grey',
  color: '#fff',
  content: '<',
};

export const RightButton = Template.bind({});
RightButton.args = {
  backgroundColor: 'grey',
  color: '#fff',
  content: '>',
};
