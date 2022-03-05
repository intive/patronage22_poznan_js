import MetaData from './';

export default {
  title: 'MovieHero/MetaData',
  component: MetaData,
};

const Template = ({ ...args }) => <MetaData {...args} />;

export const Default = Template.bind({});
Default.args = {
  margin: '0 0 0 0',
};
