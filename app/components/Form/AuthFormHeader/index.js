import { TabWrapper, FormHeader, TabButton } from './AuthFormHeader.styles.js';
import Image from 'next/image';
import appLogoImg from '/public/app-logo.svg';
import { useRouter } from 'next/router';
import { StyledLogo } from './AuthFormHeader.styles.js';

export default function AuthenticationFormHeader({ active }) {
  const router = useRouter();
  return (
    <FormHeader>
      <StyledLogo>
        <Image
          src={appLogoImg}
          alt="InTiVi logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          priority="true"
        />
      </StyledLogo>
      <TabWrapper>
        <TabButton onClick={() => router.push('/sign-in')} active={active === 'sign-in'}>
          Sign in
        </TabButton>
        <TabButton onClick={() => router.push('/sign-up')} active={active === 'sign-up'}>
          Sign up
        </TabButton>
      </TabWrapper>
    </FormHeader>
  );
}
