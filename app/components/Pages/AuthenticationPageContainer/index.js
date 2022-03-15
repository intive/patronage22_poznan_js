import AuthenticationFormHeader from 'components/Form/AuthenticationFormHeader';
import SignInForm from 'components/Form/SignInForm';
import { Wrapper, FormContainer } from './AuthenticationPageContainer.styles';

export default function AuthenticationPageContainer({ active }) {
  return (
    <Wrapper>
      <FormContainer>
        <AuthenticationFormHeader active={active} />
        {/* It's only a temporary console.log. Here will be sign-in and sign-up component */}
        {active === 'sign-in' ? <SignInForm /> : console.log('Sign Up page')}
      </FormContainer>
    </Wrapper>
  );
}
