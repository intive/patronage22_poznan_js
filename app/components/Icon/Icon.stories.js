import Icon from '.';

export default {
  title: 'UI/Icon',
  component: Icon,
  argTypes: {
    size: {
      description: 'Sets size in relation to current font-size. ',
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const Custom = Template.bind({});

Custom.args = {};

export const WhiteBackground = Template.bind({});

WhiteBackground.args = {
  blackBackground: false,
};

export const BlackBackground = Template.bind({});

BlackBackground.args = {
  blackBackground: true,
};

export const Spin = Template.bind({});

Spin.args = {
  spin: true,
};
export const Pulse = Template.bind({});

Pulse.args = {
  pulse: true,
};
