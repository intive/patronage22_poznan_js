import AuthenticationFormHeader from 'components/Form/AuthenticationFormHeader';
import { Wrapper, FormContainer, Form } from './AuthenticationPageContainer.styles';

export default function AuthenticationPageContainer({ active }) {
  return (
    <Wrapper>
      <FormContainer>
        <Form>
          <AuthenticationFormHeader active={active} />
          {/* It's only a temporary console.log. Here will be sign-in and sign-up component */}
          {active === 'sign-in' ? console.log('Sign In page') : console.log('Sign Up page')}
        </Form>
      </FormContainer>
    </Wrapper>
  );
}
