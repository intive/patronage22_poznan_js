import Modal from './';

export default {
  title: 'Modal/modal',
  component: Modal,
};

const Template = ({ content, ...args }) => (
  <div style={{ backgroundColor: 'grey', width: '100vw', height: '100vh' }}>
    <Modal {...args}>{content}</Modal>;
  </div>
);

export const Default = Template.bind({});
Default.args = {
  backGroundColor: 'red',
};

export const TabletHeader = Template.bind({});
TabletHeader.parameters = {
  viewport: {
    defaultViewport: 'ipad',
  },
};
TabletHeader.args = {
  backGroundColor: 'red',
};

export const MobileHeader = Template.bind({});
MobileHeader.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
MobileHeader.args = {
  backGroundColor: 'red',
};
