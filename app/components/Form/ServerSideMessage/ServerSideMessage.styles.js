import styled from 'styled-components';
import Icon from 'components/UI/Icon';

export const StyledServerSideMessage = styled.p`
  color: ${({ errorType }) => (errorType ? '#ff5c00' : '#44ec52')};
  font-size: 0.9rem;
`;

export const ServerSideMessageIcon = styled(Icon)`
  padding: 0 5px;
`;
