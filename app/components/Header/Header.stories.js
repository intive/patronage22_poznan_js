import Header from '.';

export default {
  title: 'Header/header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const DesktopView = Template.bind({});
DesktopView.parameters = {
  viewport: {
    defaultViewport: 'responsive',
  },
};

export const TabletHeader = Template.bind({});
TabletHeader.parameters = {
  viewport: {
    defaultViewport: 'ipad',
  },
};

export const MobileHeader = Template.bind({});
MobileHeader.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
