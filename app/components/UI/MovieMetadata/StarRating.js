import styled from 'styled-components';
import Icon from '../Icon';

const printStars = (vote) => {
  // vote is 0 - 10
  // cap score to 10, round and divide by 2 to adjust to 5 star range
  let amount = Math.min(Math.round(vote), 10) / 2;
  const stars = [];
  // generate full stars
  while (amount > 0.5) {
    stars.push(<Icon type="star" />);
    amount--;
  }
  // add a half star if necessary
  if (amount > 0) {
    stars.push(<Icon type="starHalf" />);
  }
  // fill the rest (5 - stars.length) with empty stars
  const emptyStars = Array.from({ length: 5 - stars.length }, () => <Icon type="starOutline" />);
  // concat stars and empty stars
  return [...stars, ...emptyStars];
};

export default function StarRating({ vote }) {
  return (
    <Wrapper>
      <div>{printStars(vote)}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: gold;
  display: inline-block;
  position: relative;
  vertical-align: top;
`;
