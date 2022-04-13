import { Input } from 'components/Form';
import { Wrapper } from './ChangeUsername.styles';

export default function ChangeUsername({ inputUsername, setInputUsername, errors }) {
  return (
    <Wrapper>
      <Input
        id="new-username"
        placeholder={inputUsername.currentName}
        type="text"
        label="New username"
        onInputChange={(e) => {
          setInputUsername({ ...inputUsername, newName: e.target.value });
        }}
        value={inputUsername.newName}
        error={errors.newName}
      />
    </Wrapper>
  );
}
