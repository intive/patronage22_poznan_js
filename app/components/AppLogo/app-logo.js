import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import appLogoImg from '../../../public/app-logo.svg';

const StyledLogoLink = styled.a`
  width: clamp(90px, 20vw, 134px);
`;

const AppLogo = () => {
  return (
    <Link href="/" passHref>
      <StyledLogoLink>
        <Image src={appLogoImg} alt="InTiVi logo" />
      </StyledLogoLink>
    </Link>
  );
};

export default AppLogo;
