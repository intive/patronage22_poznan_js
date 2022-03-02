import { useState } from 'react';
import {
  CreateAccountBackground,
  CreateAccountWrapper,
  ContentWrapper,
  HeadingPrimary,
  HeadingSecondary,
} from './CreateAccount.styles';
import UserPrevetForm from './UserPrevetForm';
import UserSignUpForm from './UserSignUpForm';

const CreateAccount = () => {
  const [userEmailValue, setUserEmailValue] = useState('');

  const handleVerifiedEmail = (emailValue) => {
    setUserEmailValue(emailValue);
  };

  return (
    <CreateAccountBackground isLayoutLight={!!userEmailValue}>
      <CreateAccountWrapper isLayoutLight={!!userEmailValue}>
        <ContentWrapper>
          {!userEmailValue ? (
            <>
              <HeadingPrimary>Unlimited movies, TV shows, and more.</HeadingPrimary>
              <HeadingSecondary>Watch anywhere. Cancel anytime.</HeadingSecondary>
              <UserPrevetForm onEmailVerified={handleVerifiedEmail} />
            </>
          ) : (
            <>
              <HeadingPrimary>Create a password and start watching.</HeadingPrimary>
              <UserSignUpForm emailValue={userEmailValue} />
            </>
          )}
        </ContentWrapper>
      </CreateAccountWrapper>
    </CreateAccountBackground>
  );
};

export default CreateAccount;
