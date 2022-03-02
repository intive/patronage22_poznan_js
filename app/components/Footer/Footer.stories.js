import Footer from './';

export default {
  title: 'Footer/Footer',
  component: Footer,
};

const Template = ({ ...args }) => <Footer {...args} />;

export const DefaultFooter = Template.bind({});
DefaultFooter.args = {
  backgroundColor: '#000000',
  color: '#5e5d5d',
};

export const CustomFooter = Template.bind({});
CustomFooter.args = {
  backgroundColor: 'salmon',
  color: 'white',
};
