import UserAvatar from '.';

export default {
  title: 'UI/UserAvatar',
  component: UserAvatar,
  argTypes: {
    size: {
      defaultValue: 60,
      description: 'Size of avatar',
      control: {
        type: 'range',
        min: 40,
        max: 200,
        step: 10,
      },
    },
    avatar: {
      defaultValue: 5,
      control: {
        type: 'range',
        min: 1,
        max: 20,
        step: 1,
      },
    },
  },
};

const Template = (args) => <UserAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatar: 8,
};

export const Blank = Template.bind({});
Blank.args = {
  avatar: 0,
};
Blank.parameters = { controls: { exclude: ['avatar'] } };

export const Sizes = (args) => (
  <>
    <UserAvatar {...args} size={40} avatar={11} />
    <UserAvatar {...args} size={100} avatar={3} />
    <UserAvatar {...args} size={200} avatar={19} />
  </>
);
Sizes.parameters = { controls: { exclude: ['size', 'avatar'] } };
