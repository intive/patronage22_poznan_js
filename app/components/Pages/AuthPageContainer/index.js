import backgroundAuthImage from '../../../../public/images/hero-background-image.jpg';
import AuthenticationFormHeader from 'components/Form/AuthFormHeader';
import SignInForm from 'components/Form/SignInForm';
import { Wrapper, FormContainer, AuthBackground } from './AuthPageContainer.styles';
import UserSignUpForm from 'components/Form/UserSignUpForm';

export default function AuthenticationPageContainer({ active }) {
  return (
    <Wrapper>
      <AuthBackground
        src={backgroundAuthImage}
        alt="background-image"
        layout={'fill'}
        objectFit={'cover'}
        objectPosition={'top left'}
        placeholder="blur"
        quality={95}
      />
      <FormContainer>
        <AuthenticationFormHeader active={active} />
        {active === 'sign-in' ? <SignInForm /> : <UserSignUpForm />}
      </FormContainer>
    </Wrapper>
  );
}
