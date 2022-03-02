import styled from 'styled-components';
import { device } from 'consts/mediaQueries';

export const InputWrapper = styled.div`
  width: 100%;
  ${device.tablet} {
    flex: 1;
  }
`;

export const FormRow = styled.p`
  margin-bottom: 1rem;
  position: relative;
`;

export const FormLabel = styled.label`
  position: absolute;
  transition: transform 0.2s ease-in-out;
  color: #605a5a;
  top: 50%;
  left: 0.5rem;
  font-size: 1rem;
  transform: translateY(-50%);
`;

export const FormInput = styled.input`
  height: 48px;
  width: 100%;
  border: none;
  font-size: 1rem;
  border-radius: 3px;
  padding: 1rem 0.5rem 0;

  border: ${({ withBorder }) => withBorder && '1px solid #605a5a'};
  border-bottom: ${({ errorMsg }) => errorMsg && '3px solid red'};

  &:focus + ${FormLabel}, &:not([value='']) + ${FormLabel} {
    font-size: 0.8rem;
    transform: translateY(-1.4rem);
  }

  ${device.tablet} {
    height: 60px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const ErrorMsg = styled.p`
  margin-bottom: 1rem;
  padding-left: 0.4rem;
  text-align: start;
  font-size: 0.8rem;
  font-weight: 600;
  color: red;
`;
