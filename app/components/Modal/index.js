import Icon from 'components/UI/Icon';

import { GlobalStyle } from 'components/Header/Header.styles';
import { FullScreenWrapper, ContentWrapper, ButtonClose } from './Modal.styles';
import { closeModal } from 'actions/app';

const Modal = ({ content }) => {
  return (
    <>
      <GlobalStyle />
      <FullScreenWrapper>
        <ContentWrapper>
          <ButtonClose iconWithBg onClick={closeModal}>
            <Icon size="lg" type="x-mark" />
          </ButtonClose>
          {content}
        </ContentWrapper>
      </FullScreenWrapper>
    </>
  );
};

export default Modal;
