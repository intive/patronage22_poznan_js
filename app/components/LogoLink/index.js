import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import appLogoImg from '/public/app-logo.svg';

const LogoLink = () => {
  return (
    <Link href="/" passHref>
      <StyledLogoLink>
        <Image
          src={appLogoImg}
          alt="InTiVi logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          priority="true"
        />
      </StyledLogoLink>
    </Link>
  );
};

export default LogoLink;

const StyledLogoLink = styled.a`
  width: clamp(110px, 20vw, 134px);
  height: 100%;
  position: relative;
`;
