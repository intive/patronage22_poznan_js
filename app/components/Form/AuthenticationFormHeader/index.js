import { TabWrapper, FormHeader, Underlined } from './AuthenticationFormHeader.styles.js';

export default function AuthenticationFormHeader(pageLayout = {}) {
  const isSignInPage = pageLayout.signIn !== false;
  return (
    <FormHeader>
      <h1>inTiVi</h1>
      <TabWrapper>
        <a href="sign-in">Sign in</a>
        <a href="create-account">Sign up</a>
      </TabWrapper>
      {isSignInPage ? <Underlined /> : <Underlined style={{ marginLeft: '102px' }} />}
    </FormHeader>
  );
}
