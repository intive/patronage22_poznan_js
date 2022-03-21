import styled from 'styled-components';
import Button from 'components/UI/Button';

export const SignUpButton = styled(Button)`
  margin-top: 40px;
`;

export const ServersideMessage = styled.p`
  color: ${({ error }) => (error ? '#ff5c00' : '#44ec52')};
  position: absolute;
  font-size: 0.9rem;
`;

export const StyledLink = styled.a`
  text-decoration: underline;
  text-transform: uppercase;
  font-weight: 600;
`;
