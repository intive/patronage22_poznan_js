import styled from 'styled-components';
import Button from 'components/Button';
import { device } from 'consts/mediaQueries';

export const FormContainer = styled.div`
  width: ${({ width }) => width || '22rem'};
  padding: 4rem 3rem 8rem;
  color: ${({ color }) => color || 'rgb(255, 255, 255)'};
  ${device.tablet} {
    padding-top: 5vh;
    background-color: ${({ backgroundColor }) => backgroundColor || 'rgb(0, 0, 0, 0.5)'};
  }
`;

export const FormHeader = styled.h1`
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-weight: 600;
`;

export const SignInButton = styled(Button)`
  display: inline-block;
  width: 100%;
  margin-top: 0.8rem;
  padding: 0.8rem;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  font-size: 0.8rem;
  opacity: 0.5;
  cursor: pointer;
`;
export const CheckboxContainer = styled.div``;

export const SignUpLinkParagraph = styled.p`
  margin-top: 0.5rem;
  color: #5e5d5d;
  font-weight: 600;
`;

export const SignUpLink = styled.a`
  margin-left: 3px;
  color: #ffffff;
`;
