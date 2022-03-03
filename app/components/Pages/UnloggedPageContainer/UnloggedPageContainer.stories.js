import UnloggedPageContainer from './';

export default {
  title: 'Pages/UnloggedPageContainer',
  component: UnloggedPageContainer,
};

const Template = (...args) => <UnloggedPageContainer {...args} />;

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
