import styled from 'styled-components';
import Icon from '../Icon';

export default function StarRating({ vote }) {
  const printStars = (amount) => {
    const content = [];
    const voteDivided = vote / 2; //vote scale from API is 10, but our scale is only 5 since we use 5 stars for rating

    for (var i = 1; i <= amount; i++) {
      if (i <= voteDivided) {
        content.push(<Icon type="star" />);
      } else if (
        i - voteDivided < 1 &&
        (voteDivided % 1).toFixed(2) >= 0.3 &&
        (voteDivided % 1).toFixed(2) <= 0.7
      ) {
        content.push(<Icon type="starHalf" />);
      } else if (i - voteDivided < 1 && (voteDivided % 1).toFixed(1) > 0.7) {
        content.push(<Icon type="star" />);
      } else {
        content.push(<Icon type="starOutline" />);
      }
    }
    return content;
  };

  return (
    <Wrapper>
      <div>{printStars(5)}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: gold;
  display: inline-block;
  position: relative;
  vertical-align: top;
`;
