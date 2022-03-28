import ActionMenu from '.';
import { SessionProvider } from 'next-auth/react';

export default {
  title: 'ActionMenu',
  component: ActionMenu,
};

const mockSession = {
  user: {
    name: 'Bruce Wayne',
    avatar: 1,
    email: 'batman@test.com',
    createdAt: '2022-03-05T00:30:17.056+00:00',
    id: '5a36a064-a1f8-4c29-b941-3109113deac6',
  },
};

const Template = (args) => (
  <SessionProvider session={mockSession}>
    <ActionMenu {...args} />
  </SessionProvider>
);

export const Default = Template.bind();
