import AuthenticationFormHeader from 'components/Form/AuthenticationFormHeader';
import LoginForm from 'components/Form/LoginForm';
import { Wrapper, FormContainer } from './AuthenticationPageContainer.styles';

export default function AuthenticationPageContainer({ active }) {
  return (
    <Wrapper>
      <FormContainer>
        <AuthenticationFormHeader active={active} />
        {/* It's only a temporary console.log. Here will be sign-in and sign-up component */}
        {active === 'sign-in' ? <LoginForm /> : <div>sign up form</div>}
      </FormContainer>
    </Wrapper>
  );
}
