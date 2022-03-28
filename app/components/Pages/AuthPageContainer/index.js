import AuthenticationFormHeader from 'components/Form/AuthFormHeader';
import SignInForm from 'components/Form/SignInForm';
import { Wrapper, FormContainer, AuthBackground } from './AuthPageContainer.styles';
import UserSignUpForm from 'components/Form/UserSignUpForm';

export default function AuthenticationPageContainer({ active }) {
  return (
    <Wrapper>
      <AuthBackground
        src={'/images/hero-background-image.jpg'}
        alt="background-image"
        layout={'fill'}
        objectFit={'cover'}
        objectPosition={'top left'}
        placeholder="blur"
        blurDataURL={'/images/blur-auth-placeholder.png'}
      />
      <FormContainer>
        <AuthenticationFormHeader active={active} />
        {active === 'sign-in' ? <SignInForm /> : <UserSignUpForm />}
      </FormContainer>
    </Wrapper>
  );
}
