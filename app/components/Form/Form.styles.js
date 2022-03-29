import styled, { css } from 'styled-components';

export const FormContainer = styled.form`
  min-width: 200px;
  width: 400px;
  max-width: 100%;
  margin-top: 40px;
  outline: ${({ hasError, hasSuccess }) =>
    hasError ? '2px solid #ff5c00' : hasSuccess ? '2px solid #44ec52' : 'unset'};

  ${({ hasError, hasSuccess }) =>
    (hasError || hasSuccess) &&
    css`
      outline-offset: 8px;
      border-radius: 8px;
    `}
`;
