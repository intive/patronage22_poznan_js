import { useState } from 'react';
import UserAvatarSelector from '.';

export default {
  title: 'Account/UserAvatarSelector',
  component: UserAvatarSelector,
};

const Template = (args) => {
  const [avatar, setAvatar] = useState(1);
  return <UserAvatarSelector {...args} selectedAvatar={avatar} setSelectedAvatar={setAvatar} />;
};

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
