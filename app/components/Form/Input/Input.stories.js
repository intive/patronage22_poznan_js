import Input from '.';
import { useState } from 'react';
export default {
  title: 'Form/Input',
  component: Input,
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || '');
  return <Input {...args} onChange={(e) => setValue(e.target.value)} value={value} />;
};

export const TextInput = Template.bind({});
TextInput.args = {
  id: 'text-input',
  label: 'Label',
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  id: 'oops',
  label: 'Label',
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
  label: 'Label',
  disabled: true,
};
