import styled from 'styled-components';
import { device } from '../../../consts/mediaQueries';

const Wrapper = styled.div`
  color: #fff;
`;

const ItemList = styled.ul`
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  display: inline;
  font-size: 0.875em;

  ${device.tablet} {
    font-size: 1.25em;
  }
`;

const Separator = styled.span`
  width: 4px;
  height: 4px;
  background-color: #44ec52;
  border-radius: 50%;
  display: inline-block;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 16px;

  ${device.tablet} {
    width: 6px;
    height: 6px;
  }
`;

export { Wrapper, Item, Separator, ItemList };
