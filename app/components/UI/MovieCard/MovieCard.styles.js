import styled from 'styled-components';

export const Wrapper = styled.div`
  /* FLEX  */

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  /* pointer and hover effect should be here or in parent (Carousel)?   */
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  padding: 0px;
  position: relative;
  border-radius: 16px;
  height: 100%;
  width: 100%;
`;

export const PosterWrapper = styled.div`
  /* FLEX */
  display: flex;
  order: 0;
  flex-grow: 0;

  height: 85%;
  width: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 2px 12px rgba(26, 26, 26, 0.1), 0px 16px 24px -2px rgba(26, 26, 26, 0.12);
  border-radius: 16px;
`;

export const TitleWrapper = styled.div`
  /* FLEX  */

  display: flex;
  order: 1;
  flex-grow: 0;

  height: 15%;
  width: 100%;
  padding-top: 2%;
  padding-left: 2%;
  padding-right: 2%;
`;

export const Title = styled.p`
  /* FLEX  */

  align-self: center;
  order: 1;
  flex-grow: 0;

  font-size: 0.8em;
  font-weight: 600;
  line-height: 1.2em;
  color: #ffffff;
  filter: drop-shadow(0px 2px 8px rgba(32, 37, 50, 0.08))
    drop-shadow(0px 2px 4px rgba(32, 37, 50, 0.03));
`;
