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
  faChevronDown,
  faGear,
  faSortDown,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const iconMap = {
  'arrow-down': faArrowDown,
  'chevron-down': faChevronDown,
  'chevron-right': faChevronRight,
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
  'chevron-left': faChevronLeft,
};

export default function Icon({ type, ...props }) {
  const iconName = iconMap[type] || faQuestionCircle;

  return <FontAwesomeIcon icon={iconName} {...props} />;
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
