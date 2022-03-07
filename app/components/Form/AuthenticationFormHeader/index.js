import { TabWrapper, FormHeader, TabButton } from './AuthenticationFormHeader.styles.js';
import LogoLink from 'components/UI/LogoLink';
import { useRouter } from 'next/router';

export default function AuthenticationFormHeader({ active }) {
  const router = useRouter();
  return (
    <FormHeader>
      <LogoLink />
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
