import { Input } from 'components/Form';
import { Wrapper } from './ChangePassword.styles';
import { useState } from 'react';

const initialState = Object.freeze({ currentPass: '', newPass: '', repeatPass: '' });

export default function ChangePassword() {
  const [inputValues, setInputValues] = useState(initialState);

  return (
    <Wrapper>
      <Input
        id="current-password-input"
        type="password"
        label="Current password"
        onInputChange={(e) => {
          setInputValues({ ...inputValues, currentPass: e.target.value });
        }}
        value={inputValues.currentPass}
      />
      <Input
        id="new-password-input"
        type="password"
        label="New password"
        onInputChange={(e) => {
          setInputValues({ ...inputValues, newPass: e.target.value });
        }}
        value={inputValues.newPass}
      />
      <Input
        id="repeat-new-password-input"
        type="password"
        label="Repeat new password"
        onInputChange={(e) => {
          setInputValues({ ...inputValues, repeatPass: e.target.value });
        }}
        value={inputValues.repeatPass}
      />
    </Wrapper>
  );
}
