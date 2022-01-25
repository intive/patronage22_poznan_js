import styled from 'styled-components';

const FormWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem;
`;

const FormContent = styled.div`
  width: 100%;
  max-width: 800px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const FormTitle = styled.h1`
    font-size: 2.2rem;
    color: #1a1c1f;
    margin-bottom: 2rem;
`

const FormButton = styled.button`
    align-self: end;
    margin-top: 1rem;
    padding: 1rem 1.4rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #007ac9;
    border: 2px solid #007ac9;
    background-color: #fff;
    transition: background-color .4s ease-in-out, color .3s ease-in-out;
    cursor: pointer;
    &:hover {
        background-color: #007ac9;
        color: #fff;
    }
`

const FormRow = styled.p`
    display: flex;
    flex-direction: column;
    margin-top: 0 0 1.2rem;
`

const FormLabel = styled.label`
    margin-bottom: 0.6rem;
    transition: all 0.4s ease-in-out;
    color: #605a5a;
    transform: ${({ isInputFocused }) => isInputFocused ? 'translateY(0)' : 'translateY(30px)'};
`

const FormInput = styled.input`
    flex: 1;
    padding-bottom: 0.4rem;
    font-size: 1.2rem;
    color: #000;
    line-height: normal;
    background-color: #fff;
    border: none;
    border-bottom: 1px solid #605a5a;
`

const ErrorMsg = styled.p`
    margin: 0 0 1rem;
    font-size: 0.8rem;
    color: red;
`

export { FormWrapper, FormContent, Form, FormTitle, FormButton, FormRow, FormLabel, FormInput, ErrorMsg }
