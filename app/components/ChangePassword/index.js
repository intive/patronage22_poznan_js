import { Input } from 'components/Form';
import { Wrapper } from './ChangePassword.styles';

export default function ChangePassword({ inputValues, setInputValues, errors }) {
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
        error={errors.currentPass}
      />
      <Input
        id="new-password-input"
        type="password"
        label="New password"
        onInputChange={(e) => {
          setInputValues({ ...inputValues, newPass: e.target.value });
        }}
        value={inputValues.newPass}
        error={errors.newPass}
      />
      <Input
        id="repeat-new-password-input"
        type="password"
        label="Repeat new password"
        onInputChange={(e) => {
          setInputValues({ ...inputValues, repeatPass: e.target.value });
        }}
        value={inputValues.repeatPass}
        error={errors.repeatPass}
      />
    </Wrapper>
  );
}
