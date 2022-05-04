import StartPage from '.';

export default {
  title: 'Pages/StartPage',
  component: StartPage,
};

const Template = (...args) => <StartPage {...args} />;

export const DesktopView = Template.bind({});
DesktopView.parameters = {
  viewport: {
    defaultViewport: 'responsive',
  },
};

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
