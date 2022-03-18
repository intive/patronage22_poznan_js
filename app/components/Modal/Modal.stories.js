import Modal from './';

export default {
  title: 'Modal/modal',
  component: Modal,
};

const Template = ({ modalContent }) => <Modal>{modalContent}</Modal>;

export const Default = Template.bind({});

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
