import styled from 'styled-components';
import Icon from 'components/UI/Icon';

export const StyledServerSideMessage = styled.p`
  color: ${({ hasError }) => (hasError ? '#ff5c00' : '#44ec52')};
  font-size: 0.9rem;
`;

export const ServerSideMessageIcon = styled(Icon).attrs(({ hasError }) => ({
  type: hasError ? 'x-mark' : 'check-mark',
}))`
  padding: 0 5px;
`;
