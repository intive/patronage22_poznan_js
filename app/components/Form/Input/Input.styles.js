import styled from 'styled-components';
import Icon from 'components/UI/Icon';

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  color: #e9e9e9;
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 36px;
  left: 20px;
  line-height: 1.5;
  transition: transform 0.2s ease-in-out;
  transform: translateY(-50%);
`;

export const StyledInput = styled.input`
  margin-bottom: 35px;
  padding-left: 20px;
  padding-top: 15px;
  width: 100%;
  height: 72px;
  border: ${({ error }) => (error && '1px solid #44ec52') || '1.5px solid #3b334c'};
  border-radius: 8px;
  background-color: #272233;
  color: #e9e9e9;

  &:focus + ${InputLabel}, &:not([value='']) + ${InputLabel} {
    font-size: 0.75rem;
    transform: translateY(-1.2rem);
  }

  :disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: 10px;
  line-height: 1.4;
  font-size: 0.9rem;
  font-weight: 400;
  color: #44ec52;
`;

export const ErrorIcon = styled(Icon)`
  padding: 0 5px;
`;
