import styled from 'styled-components';
import { device } from '../../../consts/mediaQueries';

const MetaDataWrapper = styled.div`
  color: #fff;
  font-size: 14px;
  margin: ${({ margin }) => margin || '0 0 0 0'};

  ${device.tablet} {
    font-size: 20px;
  }
`;

const MetaDataItem = styled.span`
  padding: 0 16px;
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
`;

const MetaDataSeparator = styled.span`
  width: 4px;
  height: 4px;
  background-color: #44ec52;
  border-radius: 50%;
  display: inline-block;
  top: 50%;
  transform: translateY(-50%);

  ${device.tablet} {
    width: 6px;
    height: 6px;
  }
`;

export { MetaDataWrapper, MetaDataItem, MetaDataSeparator };
