import Header from '.';

export default {
  title: 'UI/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});

export const MobileHeader = Template.bind({});
MobileHeader.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};

export const TabletHeader = Template.bind({});
TabletHeader.parameters = {
  viewport: {
    defaultViewport: 'ipad',
  },
};
