import ActionMenu from '.';

export default {
  title: 'ActionMenu',
  component: ActionMenu,
  argTypes: {
    useSession: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <ActionMenu {...args} />;

export const Default = Template.bind();
Default.args = {
  useSession: () => ({ data: { user: { avatar: 8, name: 'Bruce Wayne' } } }),
};
