import styled from 'styled-components';
import { device } from 'consts/mediaQueries';
import Button from 'components/UI/Button';
import Icon from 'components/UI/Icon';

export const Wrapper = styled.div`
  max-height: 55vh;
  z-index: 1;
  ${device.tablet} {
    max-height: 35vh;
  }
  ${device.desktop} {
    max-height: 50vh;
  }
`;
export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 2;
`;
export const DescriptionWrapper = styled.div`
  background: #1e1b26;
  z-index: 1;
  padding: 0 16px 24px 16px;
  li {
    font-size: 1.2rem;
  }
  ${device.tablet} {
    h2 {
      font-size: 2rem;
    }
    li {
      font-size: 1.3rem;
    }
  }
  ${device.desktop} {
    display: flex;
    padding: 0 72px;
    padding-bottom: 20px;
    button {
      display: none;
    }
  }
`;

export const MovieDescription = styled.section`
  p {
    font-size: 0.9rem;
    margin-top: 24px;
  }
  ${device.desktop} {
    margin: 0;
    padding-right: 48px;
    width: 80%;
    p {
      margin-top: 23px;
    }
  }
`;

export const WatchBtn = styled(Button)`
  text-transform: capitalize;
  font-size: 1.3rem;
  margin-top: 32px;
  padding: 16px 32px 16px 24px;
  ${device.desktop} {
    display: none;
  }
`;

export const PlayIcon = styled(Icon).attrs({ type: 'caret-right' })`
  margin-right: 1rem;
`;
