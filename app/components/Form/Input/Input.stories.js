import Input from '.';

export default {
  title: 'Form/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  id: 'text-input',
  label: 'Label',
  value: 'text',
};

export const InputWithoutText = Template.bind({});
InputWithoutText.args = {
  id: 'text-input',
  label: 'Label',
  value: '',
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  id: 'oops',
  label: 'Label',
  error: 'Validation error',
  value: 'text',
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  id: 'an-email',
  label: 'Email',
  type: 'email',
  value: 'text',
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  id: 'its-disabled',
  label: 'Label',
  disabled: true,
};
