import styled from 'styled-components';
import { closeModal } from 'actions/app';

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWindow = styled.div`
  width: 80%;
  min-height: 100px;
  background: #fff;
  text-align: center;
`;

export const Modal = ({ content }) => {
  return (
    <ModalOverlay>
      <ModalWindow>
        <p>{content}</p>
        <button onClick={closeModal}>Close Modal</button>
      </ModalWindow>
    </ModalOverlay>
  );
};
