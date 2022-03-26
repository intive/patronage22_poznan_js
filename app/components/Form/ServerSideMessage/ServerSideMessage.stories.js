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
  errorType: false,
  children: 'On success',
};
export const ServerSideMessageErrorType = Template.bind({});
ServerSideMessageErrorType.args = {
  errorType: true,
  children: 'On error',
};
