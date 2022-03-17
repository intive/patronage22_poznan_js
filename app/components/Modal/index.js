import Icon from 'components/Icon';
import PropTypes from 'prop-types';

import { GlobalStyle } from 'components/Header/Header.styles';
import { FullScreenWrapper, ContentWrapper, ButtonClose } from './Modal.styles';
import { closeModal } from 'actions/app';

const Modal = ({ content, ...props }) => {
  return (
    <>
      <GlobalStyle />
      <FullScreenWrapper>
        <ContentWrapper {...props}>
          <ButtonClose iconWithBg onClick={closeModal}>
            <Icon size="lg" type="x-mark" />
          </ButtonClose>
          {content}
        </ContentWrapper>
      </FullScreenWrapper>
    </>
  );
};
Modal.propTypes = {
  backGroundColor: PropTypes.string,
  onClick: PropTypes.func,
};
export default Modal;
