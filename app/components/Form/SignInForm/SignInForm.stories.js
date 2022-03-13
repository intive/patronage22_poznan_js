import SignInForm from '.';

export default {
  title: 'Form/SignInForm',
  component: SignInForm,
};

const Template = ({ ...args }) => <SignInForm {...args} />;

export const DesktopSignInForm = Template.bind({});
DesktopSignInForm.args = {
  backgroundColor: 'rgb(0, 0, 0, 0.5)',
  color: 'rgb(255, 255, 255)',
};

export const MobileSignInForm = Template.bind({});
MobileSignInForm.args = {
  backgroundColor: 'rgb(0, 0, 0)',
  color: 'rgb(255, 255, 255)',
};

export const CustomSignInForm = Template.bind({});
CustomSignInForm.args = {
  width: '30rem',
  backgroundColor: 'salmon',
  color: 'white',
};
