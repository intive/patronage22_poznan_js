import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

export default function MoviePoster({ src, alt, title, ...props }) {
  return (
    <Image
      src={src}
      alt={alt}
      title={title}
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
