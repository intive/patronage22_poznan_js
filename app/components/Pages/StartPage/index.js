import Link from 'next/link';
import Image from 'next/image';
import appLogoImg from '/public/app-logo.svg';
import {
  StartPageContainer,
  Container,
  WelcomeHeader,
  WelcomeContent,
  ContentContainer,
  Logo,
  SignUpLink,
  BackgroundWrapper,
} from './StartPage.styles';

export default function StartPage() {
  return (
    <StartPageContainer>
      <BackgroundWrapper>
        <Logo>
          <Image
            src={appLogoImg}
            alt="InTiVi logo"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            priority="true"
          />
        </Logo>
        <Container>
          <ContentContainer>
            <WelcomeHeader>Welcome to inTiVi!</WelcomeHeader>
            <WelcomeContent>
              Register with inTiVi now and enjoy watching the latest movies.
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
