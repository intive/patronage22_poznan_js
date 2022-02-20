import Input from '.';

export default {
  title: 'Form/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  id: 'text-input',
  label: 'Text',
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  id: 'oops',
  label: 'Oops',
  error: 'Validation error',
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  id: 'an-email',
  label: 'Email',
  type: 'email',
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  id: 'its-disabled',
  label: 'Disabled',
  disabled: true,
};
