import AuthenticationFormHeader from 'components/Form/AuthenticationFormHeader';
import { Wrapper, FormContainer, Form } from './AuthenticationPageContainer.styles';
import { useState } from 'react';

export default function AuthenticationPageContainer({ active }) {
  const [activeMode] = useState({ active });
  return (
    <Wrapper>
      <FormContainer>
        <Form>
          <AuthenticationFormHeader active={activeMode.active} />
          {/* It's only a temporary console.log. Here will be sign-in and sign-up component */}
          {activeMode.active === 'sign-in'
            ? console.log('Sign In page')
            : console.log('Sign Up page')}
        </Form>
      </FormContainer>
    </Wrapper>
  );
}
