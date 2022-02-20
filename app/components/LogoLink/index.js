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
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
        />
      </StyledLogoLink>
    </Link>
  );
};

export default LogoLink;

const StyledLogoLink = styled.a`
  width: clamp(90px, 20vw, 134px);
  display: inline-block;
  position: relative;
`;
