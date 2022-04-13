import Link from 'next/link';
import {
  StartPageContainer,
  Container,
  WelcomeHeader,
  WelcomeContent,
  ContentContainer,
  SignUpLink,
  BackgroundWrapper,
} from './StartPage.styles';

export default function StartPage() {
  return (
    <StartPageContainer>
      <BackgroundWrapper>
        <Container>
          <ContentContainer>
            <WelcomeHeader>Welcome to inTiVi!</WelcomeHeader>
            <WelcomeContent>
              Register now in inTiVi now and enjoy watching the latest movies.
              <Link href="/sign-up" passHref>
                <SignUpLink>Sign Up</SignUpLink>
              </Link>
            </WelcomeContent>
          </ContentContainer>
        </Container>
      </BackgroundWrapper>
    </StartPageContainer>
  );
}
