import Footer from '.';

export default {
  title: 'FOOTER/Footer',
  component: Footer,
};

const Template = ({ ...args }) => <Footer {...args} />;

export const DesktopFooter = Template.bind({});
DesktopFooter.args = {};
