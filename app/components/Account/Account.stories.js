import Account from '.';
import { SessionProvider } from 'next-auth/react';

export default {
  title: 'Account/Account',
  component: Account,
};

const mockSession = {
  user: {
    name: 'John',
    avatar: 1,
    email: 'john@test.com',
    createdAt: '2022-03-05T00:30:17.056+00:00',
    id: '5a36a064-a1f8-4c29-b941-3109113deac6',
  },
};

const Template = (args) => (
  <SessionProvider session={mockSession}>
    <Account {...args} />
  </SessionProvider>
);

export const Responsive = Template.bind({});

export const TabletView = Template.bind({});
TabletView.parameters = {
  viewport: {
    defaultViewport: 'ipad',
  },
};

export const MobileView = Template.bind({});
MobileView.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
