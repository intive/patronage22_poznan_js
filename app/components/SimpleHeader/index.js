import styled from 'styled-components';
import { device } from 'consts/mediaQueries';
import LogoLink from 'components/UI/LogoLink';
import Button from 'components/UI/Button';

const userActions = {
  signUp: { link: '/sign-up', buttonText: 'Sign Up' },
  signIn: { link: '/sign-in', buttonText: 'Sign In' },
};
const SimpleHeader = ({ mode }) => {
  const { link, buttonText } = userActions[mode] || userActions.signIn;

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
  padding: 1.5rem 1rem;
  z-index: 1000;
  position: absolute;
  width: 100%;

  ${device.tablet} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  ${device.tablet} {
    height: 50px;
  }
`;
