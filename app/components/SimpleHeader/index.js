import styled from 'styled-components';
import Link from 'next/link';

import { device } from 'consts/mediaQueries';
import LogoLink from '../LogoLink/index';
import { PrimaryButton } from 'components/Button';

const SimpleHeader = () => {
  return (
    <HeaderContainer>
      <StyledNavigation>
        <LogoLink />
        <Link href="/user/login" passHref>
          <PrimaryButton as="a">Sign in</PrimaryButton>
        </Link>
      </StyledNavigation>
    </HeaderContainer>
  );
};

export default SimpleHeader;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  padding: 2rem 1rem 0;

  @media ${device.tablet} {
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
