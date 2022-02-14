import Button from '.';

export default {
  title: 'UI/Button',
  component: Button,
};

const Template = ({ text, ...args }) => <Button {...args}>{text}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  text: 'Disabled Button',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  backgroundColor: 'lightgreen',
  text: 'Green Button',
};

export const ButtonAsLink = Template.bind({});
ButtonAsLink.args = {
  primary: true,
  href: '/user/login',
  text: 'Button as Link',
};
