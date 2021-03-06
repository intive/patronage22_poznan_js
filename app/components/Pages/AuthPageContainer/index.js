import AuthenticationFormHeader from 'components/Form/AuthFormHeader';
import SignInForm from 'components/Form/SignInForm';
import { Wrapper, FormContainer } from './AuthPageContainer.styles';
import UserSignUpForm from 'components/Form/UserSignUpForm';

export default function AuthenticationPageContainer({ active }) {
  return (
    <Wrapper>
      <FormContainer>
        <AuthenticationFormHeader active={active} />
        {active === 'sign-in' ? <SignInForm /> : <UserSignUpForm />}
      </FormContainer>
    </Wrapper>
  );
}
