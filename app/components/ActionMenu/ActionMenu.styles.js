import Button from 'components/UI/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 32px 16px;
  width: 300px;
  height: 100%;
  color: #fff;
  background-color: #1e1b26;
  border-radius: 8px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.25em;

  .username {
    margin: 16px 0;
  }
`;

const ActionList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ActionBtn = styled(Button)`
  justify-content: space-between;
  padding: 16px 0;
  border-radius: 0;

  :not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.24);
  }

  :last-child {
    margin-bottom: 16px;
  }
`;

export { Wrapper, UserInfo, ActionList, ActionBtn };
