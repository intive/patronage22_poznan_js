import styled from 'styled-components';

export const CarouselOuter = styled.div`
  margin: 80px 30px;
  border: none;
  overflow: hidden;
  position: relative;
  background-color: pink;
  width: 90vw;

  & .carousel-nav-button {
    display: none;
  }

  &:hover .carousel-nav-button {
    display: block;
  }
`;

export const CarouselItemWrapper = styled.div`
  width: calc(100% / ${(props) => props.tileCount});
  display: inline-block;
  height: 100px;
  padding-right: 6px;

  border: 1px solid red;
  cursor: pointer;
`;

export const CarouselItemInner = styled.div`
  width: 100%;
  height: 100px;
  background-color: grey;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  font-size: 20px;
  border: none;
  position: absolute;
  left: ${(props) => (props.left === true ? 0 : 'auto')};
  right: ${(props) => (props.right === true ? 0 : 'auto')};
  top: 0;
  bottom: 0;
  width: 40px;
  cursor: pointer;
`;
