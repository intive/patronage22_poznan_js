import Button from 'components/UI/Button';
import { device } from 'consts/mediaQueries';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  padding: 112px 16px 32px 16px;
  padding-top: 112px;
  color: #fff;
  background: linear-gradient(180deg, rgba(30, 27, 38, 0.56) 0%, rgba(30, 27, 38, 0.4) 100%);
  backdrop-filter: blur(48px);
  border-radius: 0px;

  ${device.tablet} {
    right: 48px;
    top: 72px;
    left: initial;
    bottom: initial;
    width: 300px;
    padding: 32px 16px;
    background-color: #1e1b26;
    border-radius: 8px;
  }
`;

const CloseMenuBtn = styled(Button)`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 50px;
  height: 50px;
  z-index: 1;

  ${device.tablet} {
    display: none;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Username = styled.div`
  margin: 16px 0 60px 0;
  font-size: 1.8em;

  ${device.tablet} {
    margin: 16px 0;
    font-size: 1.25em;
  }
`;

const ActionList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li``;

const ActionBtn = styled(Button)`
  justify-content: space-between;
  padding: 16px 0;
  border-radius: 0;
  font-size: 1.4em;

  :not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.24);
  }

  :last-child {
    margin-bottom: 80px;
  }

  ${device.tablet} {
    font-size: initial;

    :last-child {
      margin-bottom: 16px;
    }
  }
`;

const LogOutBtn = styled(Button)`
  font-size: 1.3em;
  padding: 16px 32px;

  ${device.tablet} {
    font-size: initial;
  }
`;

export { Wrapper, CloseMenuBtn, UserInfo, Username, ActionList, ListItem, ActionBtn, LogOutBtn };
