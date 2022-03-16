import AuthenticationFormHeader from 'components/Form/AuthenticationFormHeader';
import { Wrapper, FormContainer } from './AuthenticationPageContainer.styles';
import UserSignUpForm from 'components/Form/UserSignUpForm';

export default function AuthenticationPageContainer({ active }) {
  return (
    <Wrapper>
      <FormContainer>
        <AuthenticationFormHeader active={active} />
        {/* It's only a temporary div. Here will be sign-in and sign-up component */}
        {active === 'sign-in' ? <div>sign in form</div> : <UserSignUpForm />}
      </FormContainer>
    </Wrapper>
  );
}
