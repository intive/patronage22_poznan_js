import {
  Wrapper,
  FormContainer,
  TabWrapper,
  FormHeader,
  Underlined,
  Logo,
} from './UnloggedPageContainer.styles';

export default function UnLoggedPageContainer(pageLayout = {}) {
  const isSignInPage = pageLayout.signIn !== false;
  return (
    <Wrapper>
      <FormContainer>
        <FormHeader>
          <Logo>
            <h1>inTiVi</h1>
          </Logo>
          <TabWrapper>
            <a href="sign-in">Sign in</a>
            <a href="create-account">Sign up</a>
          </TabWrapper>
          {isSignInPage ? <Underlined /> : <Underlined style={{ marginLeft: '102px' }} />}
        </FormHeader>
        {isSignInPage ? console.log('SignIn') : console.log('SignUp')}
      </FormContainer>
    </Wrapper>
  );
}
