import styled from 'styled-components';
import Button from 'components/UI/Button';
import Icon from 'components/UI/Icon';
import { css } from 'styled-components';
import { device } from 'consts/mediaQueries';

export const AccountWrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #1e1b26;
  color: #fff;
  padding: 100px 20px 20px;
  min-width: 375px;
  width: 100%;

  section {
    margin-bottom: 1rem;
  }

  ${device.tablet} {
    padding: 100px 80px 80px;
    min-height: 100vh;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const PencilIcon = styled(Icon).attrs({ type: 'pencil' })``;

export const EditAvatarButton = styled(Button)`
  position: relative;

  ${PencilIcon} {
    display: none;
    position: absolute;
    right: 8px;
    bottom: 8px;
    width: 20px;
    height: 20px;
  }

  :hover {
    outline: 1px dashed white;
  }

  :hover ${PencilIcon} {
    display: block;
  }

  ${({ $isEditingAvatar }) =>
    $isEditingAvatar &&
    css`
      outline: 1px dashed white;
      ${PencilIcon} {
        display: block;
      }
    `}
`;

export const Username = styled.section`
  font-size: 2em;
`;

export const Email = styled.section`
  font-size: 1.5em;
`;

export const Header = styled.h1`
  align-self: flex-start;
  margin-bottom: 20px;

  ${device.tablet} {
    margin-bottom: none;
  }
`;
