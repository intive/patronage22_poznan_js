import { Wrapper404, Message404, ImageWrapper } from './404.styles';
import Image from 'next/image';
import appLogo404Img from '/public/images/app-logo-404.svg';

export default function Layout404() {
  return (
    <Wrapper404>
      <ImageWrapper>
        <Image
          src={appLogo404Img}
          alt="InTiVi logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          priority="true"
        />
      </ImageWrapper>

      <Message404>404 not found</Message404>
    </Wrapper404>
  );
}
