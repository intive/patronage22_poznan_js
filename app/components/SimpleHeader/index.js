import styled from 'styled-components';
import { device } from 'consts/mediaQueries';
import LogoLink from '../LogoLink';
import Button from 'components/Button';
import AppContext from 'context/app';
import { useContext } from 'react';

const userActions = {
  signUp: { link: '/user/create-account', buttonText: 'Sign Up' },
  signIn: { link: '/user/login', buttonText: 'Sign In' },
};
const SimpleHeader = () => {
  const { headerMode } = useContext(AppContext);
  const { link, buttonText } = userActions[headerMode] || {};

  return (
    <HeaderContainer>
      <StyledNavigation>
        <LogoLink />
        {link && buttonText && (
          <Button primary href={link}>
            {buttonText}
          </Button>
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
