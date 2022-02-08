import styled from "styled-components";
import Link from "next/link";

import LogoLink from "components/LogoLink/logo-link";
import { PrimaryButton } from "../Button/button";

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
  @media only screen and (min-width: 768px) {
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
