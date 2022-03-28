import ServerSideMessage from '.';
export default {
  title: 'Form/ServerSideMessage',
  component: ServerSideMessage,
};

const Template = ({ children, ...args }) => {
  return <ServerSideMessage {...args}> {children} </ServerSideMessage>;
};

export const Default = Template.bind({});
Default.args = {
  hasError: false,
  children: 'On success',
};
export const ServerSideErrorMessage = Template.bind({});
ServerSideErrorMessage.args = {
  hasError: true,
  children: 'On error',
};
