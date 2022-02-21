import styled from 'styled-components';
import { device } from 'consts/mediaQueries';
import LogoLink from '../LogoLink';
import Button from 'components/Button';

const SimpleHeader = () => {
  return (
    <HeaderContainer>
      <StyledNavigation>
        <LogoLink />
        <Button primary as="a"></Button>
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
