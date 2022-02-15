import Button from '.';

export default {
  title: 'UI/Button',
  component: Button,
};

const Template = ({ text, ...args }) => <Button {...args}>{text}</Button>;

export const Default = Template.bind({});
Default.args = {
  text: 'Default Button',
};

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary button',
  primary: true,
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
