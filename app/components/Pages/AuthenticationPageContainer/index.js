import AuthenticationFormHeader from 'components/Form/AuthenticationFormHeader';
import { Wrapper, FormContainer, Form } from './AuthenticationPageContainer.styles';

export default function AuthenticationPageContainer(pageLayout = {}) {
  const isSignInPage = pageLayout.signIn !== false;
  return (
    <Wrapper>
      <FormContainer>
        <Form>
          <AuthenticationFormHeader />
          {/* It's only a temporary console.log. Here will be sign-in and sign-up component */}
          {isSignInPage ? console.log('SignIn') : console.log('SignUp')}
        </Form>
      </FormContainer>
    </Wrapper>
  );
}
