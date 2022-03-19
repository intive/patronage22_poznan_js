import Icon from 'components/UI/Icon';

import { HiddenOverflow } from 'consts/bodystyles';
import { FullScreenWrapper, ContentWrapper, ButtonClose } from './Modal.styles';
import { closeModal } from 'actions/app';

const Modal = ({ content }) => {
  return (
    <>
      <HiddenOverflow />
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
