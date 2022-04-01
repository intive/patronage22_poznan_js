import styled from 'styled-components';
import { device } from 'consts/mediaQueries';
import Button from 'components/UI/Button';
import Icon from 'components/UI/Icon';

export const MovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #1e1b26;
`;
export const MovieBackDrop = styled.div`
  position: relative;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-position: center top;
  color: white;
  height: 50vh;
  ${device.desktop} {
    height: 80vh;
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
    padding: 8px 72px 20px 72px;
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
    p {
      margin-top: 23px;
    }
  }
`;

export const CarouselWrapper = styled.div`
  width: 90%;
  margin: 20px auto 0 auto;
  p {
    font-size: 0.9rem;
    text-align: center;
  }
  ${device.desktop} {
    margin: 20px auto 20px auto;
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
export const CarouselTitle = styled.h3`
  color: white;
  text-align: left;
  font-size: 1rem;
  ${device.tablet} {
    font-size: 1.2rem;
  }
  ${device.desktop} {
    font-size: 1.5rem;
  }
`;
