import Link from 'next/link';
import StyledLogoLink from './LogoLink.styles';
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
