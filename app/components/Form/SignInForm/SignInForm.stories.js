import SignInForm from '.';

export default {
  title: 'Form/SignInForm',
  component: SignInForm,
};

const Template = ({ ...args }) => <SignInForm {...args} />;

export const DefaultView = Template.bind({});
DefaultView.parameters = {
  viewport: {
    defaultViewport: 'responsive',
  },
};
