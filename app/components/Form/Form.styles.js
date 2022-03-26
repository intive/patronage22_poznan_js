import styled, { css } from 'styled-components';

export const FormContainer = styled.form`
  min-width: 200px;
  width: 400px;
  max-width: 100%;
  margin-top: 40px;

  ${({ hasError }) =>
    hasError &&
    css`
      outline: 2px solid #ff5c00;
      outline-offset: 8px;
      border-radius: 8px;
    `}
`;
