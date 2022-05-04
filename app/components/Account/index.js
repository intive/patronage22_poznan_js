import Button from 'components/UI/Button';
import UserAvatar from 'components/UI/UserAvatar';
import UserAvatarSelector from 'components/UserAvatarSelector';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import {
  AccountWrapper,
  EditAvatarButton,
  Email,
  FlexRow,
  Header,
  PencilIcon,
  Username,
  ChangePass,
} from './Account.styles';
import ChangePassword from 'components/ChangePassword';
import { validateChangePassword } from 'utils/validateFormInputs';

const initialState = Object.freeze({ currentPass: '', newPass: '', repeatPass: '' });

export default function Account() {
  const { data: session } = useSession();

  const user = session?.user;
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const [isChangingPass, setIsChangingPass] = useState(false);
  const [inputValues, setInputValues] = useState(initialState);
  const [inputErrors, setInputErrors] = useState({});

  const handleSave = (event) => {
    event.preventDefault();

    setInputErrors(null);
    const isFormValid = validateInputs();

    if (isFormValid) {
      alert('Password could be changed, wait for backend.');
    }
  };

  const validateInputs = () => {
    //TODO: current password validation
    const errorMessages = validateChangePassword(inputValues);
    const isError = Object.values(errorMessages).some((errorMessage) => Boolean(errorMessage));
    setInputErrors(isError ? errorMessages : {});
    return !isError;
  };

  const toggleIsEditingAvatar = () => {
    setIsEditingAvatar(!isEditingAvatar);
    setSelectedAvatar(user.avatar);
  };

  useEffect(() => {
    if (user) {
      setSelectedAvatar(user.avatar);
    }
  }, [user]);

  if (!user) {
    return (
      <AccountWrapper>
        <Header>Account</Header>
        Not signed in :(
      </AccountWrapper>
    );
  }

  return (
    <AccountWrapper>
      <Header>Account</Header>
      {!isChangingPass && (
        <>
          <section>
            <EditAvatarButton
              onlyIcon
              onClick={toggleIsEditingAvatar}
              $isEditingAvatar={isEditingAvatar}
            >
              <UserAvatar size={200} avatar={selectedAvatar} />
              <PencilIcon />
            </EditAvatarButton>
          </section>
          {!isEditingAvatar && (
            <>
              {user.name && <Username>{user.name}</Username>}
              {user.email && <Email>{user.email}</Email>}
              {user.createdAt && (
                <section>with us since {new Date(user.createdAt).toDateString()}</section>
              )}
              <ChangePass onClick={() => setIsChangingPass(!isChangingPass)}>
                Change password
              </ChangePass>
              <FlexRow>
                <Button onClick={signOut}>Log Out</Button>
              </FlexRow>
            </>
          )}
          {isEditingAvatar && (
            <section>
              <UserAvatarSelector
                selectedAvatar={selectedAvatar}
                setSelectedAvatar={setSelectedAvatar}
              />
              <FlexRow>
                <Button primary onClick={() => alert('I wish I could')}>
                  Save
                </Button>
                <Button onClick={toggleIsEditingAvatar}>Cancel</Button>
              </FlexRow>
            </section>
          )}
        </>
      )}
      {isChangingPass && (
        <>
          <ChangePassword
            inputValues={inputValues}
            setInputValues={setInputValues}
            errors={inputErrors}
          />
          <FlexRow>
            <Button primary onClick={handleSave}>
              Save
            </Button>
            <Button onClick={() => setIsChangingPass(false)}>Cancel</Button>
          </FlexRow>
        </>
      )}
    </AccountWrapper>
  );
}
