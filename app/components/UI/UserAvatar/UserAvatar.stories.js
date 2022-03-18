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
    useSession: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <UserAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  useSession: () => ({ data: { user: { avatar: 8 } } }),
};

export const Blank = Template.bind({});
Blank.args = {
  // no session data
  useSession: () => ({ data: {} }),
};

export const Sizes = (args) => (
  <>
    <UserAvatar {...args} size={40} />
    <UserAvatar {...args} size={100} />
    <UserAvatar {...args} size={200} />
  </>
);

Sizes.args = {
  useSession: () => ({ data: { user: { avatar: 3 } } }),
};
