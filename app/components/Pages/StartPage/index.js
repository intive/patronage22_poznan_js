import {
  StartPageContainer,
  Container,
  WelcomeHeader,
  WelcomeContent,
  ContentContainer,
  BackgroundWrapper,
} from './StartPage.styles';
import Button from 'components/UI/Button';

export default function StartPage() {
  return (
    <StartPageContainer>
      <BackgroundWrapper>
        <Container>
          <ContentContainer>
            <WelcomeHeader>Welcome to inTiVi!</WelcomeHeader>
            <WelcomeContent>
              Register now in inTiVi and enjoy watching the latest movies.
            </WelcomeContent>
            <Button primary href="/sign-up">
              Sign Up
            </Button>
          </ContentContainer>
        </Container>
      </BackgroundWrapper>
    </StartPageContainer>
  );
}
