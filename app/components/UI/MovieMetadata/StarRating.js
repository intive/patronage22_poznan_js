import styled from 'styled-components';
import Icon from '../Icon';

export default function StarRating({ vote }) {
  //create an array with given amount of given Fontawesome types
  const printStars = (amount, starType) => {
    let content = [];
    for (var i = 0; i < amount; i++) {
      content.push(<Icon type={starType} />);
    }
    return content;
  };

  return (
    <Wrapper>
      <div>{printStars(5, 'starOutline')}</div>
      <StarSolid vote={vote}>{printStars(5, 'star')}</StarSolid>
    </Wrapper>
  );
}

const StarSolid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => (props.vote / 10) * 100}%;
  white-space: nowrap;
  overflow: hidden;
`;

const Wrapper = styled.div`
  color: yellow;
  display: inline-block;
  position: relative;
  vertical-align: top;
`;
