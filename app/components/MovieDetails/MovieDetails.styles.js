import styled from 'styled-components';
import { device } from 'consts/mediaQueries';
import Button from 'components/UI/Button';
import Icon from 'components/UI/Icon';

export const MovieBackDrop = styled.div`
  position: relative;
  min-height: 50vh;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-position: center top;
  width: 100%;
  height: 100%;
  color: white;
  ${device.desktop} {
    height: 60vh;
  }
`;
export const LoadingWrapper = styled.div`
  height: 100vh;
  position: relative;
  background: #1e1b26;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  ${device.tablet} {
    height: 80vh;
    width: 100%;
  }
`;
export const DescriptionWrapper = styled.div`
  color: white;
  background: #1e1b26;
  z-index: 1;
  padding: 0 16px 10px 16px;
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
  ${device.tablet} {
    button {
      display: none;
    }
  }
  ${device.desktop} {
    display: flex;
    padding: 0 72px;
    padding-bottom: 20px;
  }
`;

export const MovieDescription = styled.section`
  p {
    font-size: 0.9rem;
    margin-top: 24px;
  }
  ${device.tablet} {
    p {
      margin-top: 23px;
      font-size: 1.2rem;
    }
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
