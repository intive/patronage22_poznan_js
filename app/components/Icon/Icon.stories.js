import Icon from '.';

export default {
  title: 'UI/Icon',
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: '',
  color: '#000',
  size: '1x',
  opacity: '1',
  rotation: '0',
  flip: 'none',
  spin: false,
  pulse: false,
};
