import ChangePassword from '.';
import { useState } from 'react';

export default {
  title: 'Account/ChangePassword',
  component: ChangePassword,
};

const initialState = { currentPass: '', newPass: '', repeatPass: '' };
const inputErrors = initialState;

const Template = (args) => {
  const [inputValues, setInputValues] = useState(initialState);

  return (
    <ChangePassword
      inputValues={inputValues}
      setInputValues={setInputValues}
      errors={inputErrors}
      {...args}
    />
  );
};

export const Responsive = Template.bind({});
