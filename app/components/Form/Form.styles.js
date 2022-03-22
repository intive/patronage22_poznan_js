import styled from 'styled-components';

export const FormContainer = styled.form`
  min-width: 200px;
  width: 400px;
  max-width: 100%;
  padding-top: 40px;
`;

export const ServersideMessage = styled.p`
  color: ${({ error }) => (error ? '#ff5c00' : '#44ec52')};
  position: absolute;
  font-size: 0.9rem;
`;
