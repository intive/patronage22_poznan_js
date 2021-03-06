import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVolumeMute,
  faPlay,
  faVolumeUp,
  faXmark,
  faMagnifyingGlass,
  faQuestionCircle,
  faArrowDown,
  faChevronRight,
  faChevronLeft,
  faChevronDown,
  faGear,
  faSortDown,
  faPencil,
  faStar,
  faStarHalfAlt,
  faCheck,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';
const iconMap = {
  'arrow-down': faArrowDown,
  'chevron-down': faChevronDown,
  'chevron-right': faChevronRight,
  'chevron-left': faChevronLeft,
  'question-circle': faQuestionCircle,
  'volume-mute': faVolumeMute,
  'volume-up': faVolumeUp,
  'x-mark': faXmark,
  facebook: faFacebookF,
  gear: faGear,
  instagram: faInstagram,
  play: faPlay,
  search: faMagnifyingGlass,
  twitter: faTwitter,
  youtube: faYoutube,
  'sort-down': faSortDown,
  pencil: faPencil,
  star: faStar,
  starOutline: farStar,
  starHalf: faStarHalfAlt,
  'check-mark': faCheck,
  heart: faHeart,
  'heart-outline': faHeartOutline,
};

export default function Icon({
  type,
  color,
  size,
  opacity,
  rotation,
  flip,
  spin,
  pulse,
  className,
}) {
  const iconName = iconMap[type] || faQuestionCircle;

  // FontAwesomeIcon passes {}...props} down to the svg DOM node which triggers an error with any custom prop
  // so let's select only standard props
  const selectedProps = { color, size, opacity, rotation, flip, spin, pulse, className };

  return <FontAwesomeIcon icon={iconName} {...selectedProps} />;
}

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(iconMap)),
  color: PropTypes.string,
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'lg',
    '1x',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x',
  ]),
  opacity: PropTypes.number,
  rotation: PropTypes.number,
  flip: PropTypes.oneOf(['none', 'horizontal', 'vertical', 'both']),
  spin: PropTypes.bool,
  pulse: PropTypes.bool,
};
