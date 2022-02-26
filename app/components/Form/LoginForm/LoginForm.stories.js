import LoginForm from './';

export default {
  title: 'Form/LoginForm',
  component: LoginForm,
};

const Template = ({ ...args }) => <LoginForm {...args} />;

export const DesktopLoginForm = Template.bind({});
DesktopLoginForm.args = {
  backgroundColor: 'rgb(0, 0, 0, 0.5)',
  color: 'color: rgb(255, 255, 255);',
};

export const MobileLoginForm = Template.bind({});
MobileLoginForm.args = {
  padding: ' 4rem 3rem 8rem',
  backgroundColor: 'rgb(0, 0, 0)',
  color: 'rgb(255, 255, 255)',
};

export const CustomLoginForm = Template.bind({});
CustomLoginForm.args = {
  width: '30rem',
  backgroundColor: 'salmon',
  color: 'white',
};
