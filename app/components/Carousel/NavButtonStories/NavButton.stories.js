import { Button } from '.';

export default {
  title: 'UI/Carousel',
  component: Button,
  argTypes: { onClick: { action: 'onClick' } },
};

const Template = ({ text, ...args }) => <Button {...args}>{text}</Button>;

export const LeftButton = Template.bind({});
LeftButton.args = {
  backgroundColor: 'grey',
  text: '<',
};

export const RightButton = Template.bind({});
LeftButton.args = {
  backgroundColor: 'grey',
  text: '>',
};
