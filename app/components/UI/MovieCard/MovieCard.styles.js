import styled from 'styled-components';

export const flexDivStyle = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const PosterWrapper = styled(flexDivStyle)`
  order: 0;
  flex-grow: 0;
  transition: opacity ease-in-out 0.2s;
  height: 85%;
  overflow: hidden;
  box-shadow: 0px 2px 12px rgba(26, 26, 26, 0.1), 0px 16px 24px -2px rgba(26, 26, 26, 0.12);
  border-radius: 16px;
  aspect-ratio: 1 / 1.5;
`;

export const Wrapper = styled(flexDivStyle)`
  flex-direction: column;
  align-items: flex-start;
  &:hover ${PosterWrapper} {
    opacity: 0.8;
  }
  padding: 0px;
  border-radius: 16px;
`;

export const TitleWrapper = styled(flexDivStyle)`
  order: 1;
  flex-grow: 0;
  white-space: normal;

  &:hover {
    $PosterWrapper: opacity = '0.2';
  }

  height: 15%;
  padding: 2%;
`;

export const Title = styled.p`
  align-self: center;
  order: 1;
  flex-grow: 0;
  width: 100%;
  font-size: 0.8em;
  font-weight: 600;
  line-height: 1.2em;
  color: #ffffff;
  filter: drop-shadow(0px 2px 8px rgba(32, 37, 50, 0.08))
    drop-shadow(0px 2px 4px rgba(32, 37, 50, 0.03));
`;
