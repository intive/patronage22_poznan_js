import styled from 'styled-components';
import Link from 'next/link';
import { device } from 'consts/mediaQueries';
import LogoLink from '../LogoLink';
import { PrimaryButton } from 'components/Button';

const userActions = {
  signUp: { link: '/user/create-account', buttonText: 'Sign Up' },
  signIn: { link: '/user/login', buttonText: 'Sign In' },
};
const SimpleHeader = ({ headerMode }) => {
  const { link, buttonText } = userActions[headerMode] || {};
  return (
    <HeaderContainer>
      <StyledNavigation>
        <LogoLink />
        {link && buttonText && (
          <Link href={link} passHref>
            <PrimaryButton as="a">{buttonText}</PrimaryButton>
          </Link>
        )}
      </StyledNavigation>
    </HeaderContainer>
  );
};

export default SimpleHeader;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  padding: 2rem 1rem 0;
  z-index: 1000;
  position: fixed;

  ${device.tablet} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: clamp(300px, 95vw, 1920px);
`;
