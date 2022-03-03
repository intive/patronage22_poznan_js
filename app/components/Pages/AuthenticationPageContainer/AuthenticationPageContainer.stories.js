import AuthenticationPageContainer from '.';

export default {
  title: 'Pages/AuthenticationPageContainer',
  component: AuthenticationPageContainer,
};

const Template = (...args) => <AuthenticationPageContainer {...args} />;

export const DesktopView = Template.bind({});

export const MobileView = Template.bind({});
MobileView.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};

export const TabletView = Template.bind({});
TabletView.parameters = {
  viewport: {
    defaultViewport: 'ipad',
  },
};
