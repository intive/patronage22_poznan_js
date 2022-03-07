import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  color: #e9e9e9;
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 20px;
  line-height: 24px;
  transition: transform 0.2s ease-in-out;
  transform: translateY(-50%);
`;

const StyledInput = styled.input`
  margin: 12px 0;
  width: 100%;
  height: 72px;
  border: 1.5px solid #3b334c;
  border-radius: 8px;
  background-color: #272233;
  color: #e9e9e9;
  &:focus + ${InputLabel}, &:not([value='']) + ${InputLabel} {
    font-size: 0.8rem;
    transform: translateY(-1.8rem);
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  bottom: -12px;
  line-height: 20px;
  font-size: 14px;
  color: #44ec52;
`;

export default StyledInput;
