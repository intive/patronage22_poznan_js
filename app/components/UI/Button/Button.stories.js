import Icon from 'components/UI/Icon';
import Button from '.';

export default {
  title: 'UI/Button',
  component: Button,
};

const templateStyles = {
  backgroundColor: '#1E1B26',
  width: '300px',
  height: '100px',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Template = ({ content, ...args }) => (
  <div style={templateStyles}>
    <Button {...args}>{content}</Button>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  content: 'Default Button',
};

export const Primary = Template.bind({});
Primary.args = {
  content: 'Primary Button',
  primary: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  content: 'Disabled Button',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  backgroundColor: 'lightgreen',
  content: 'Green Button',
};

export const ButtonAsLink = Template.bind({});
ButtonAsLink.args = {
  primary: true,
  href: '/user/login',
  content: 'Button as Link',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  content: 'Full Width Button',
  fullWidth: true,
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  onlyIcon: true,
  content: <Icon type="search" size="lg" />,
};

export const IconWithBg = Template.bind({});
IconWithBg.args = {
  iconWithBg: true,
  content: <Icon type="x-mark" size="lg" />,
};

export const Loading = Template.bind({});
Loading.args = {
  primary: true,
  isLoading: true,
  fullWidth: true,
  disabled: true,
};
