import Modal from './';

export default {
  title: 'Modal/Modal',
  component: Modal,
};

const Template = ({ modalContent }) => <Modal>{modalContent}</Modal>;

export const Default = Template.bind({});
Default.parameters = {
  viewport: {
    defaultViewport: 'responsive',
  },
};

export const TabletModal = Template.bind({});
TabletModal.parameters = {
  viewport: {
    defaultViewport: 'ipad',
  },
};

export const MobileModal = Template.bind({});
MobileModal.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
