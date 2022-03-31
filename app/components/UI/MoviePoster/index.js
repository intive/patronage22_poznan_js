import Image from 'next/image';
import PropTypes from 'prop-types';

export default function MoviePoster({ ...props }) {
  return (
    <Image
      src={props.src}
      alt="movie-poster"
      title={props.title}
      layout={'fill'}
      objectFit={'cover'}
      objectPosition={'50% 50%'}
      placeholder={'blur'}
      blurDataURL={'images/placeholder-blur.png'}
      {...props}
    />
  );
}

MoviePoster.propTypes = {
  src: PropTypes.string,
};
