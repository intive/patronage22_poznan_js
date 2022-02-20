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
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Icon({ type, ...props }) {
  let iconName = '';
  switch (type) {
    case 'chevron-down':
      iconName = faArrowDown;
      break;
    case 'volume-mute':
      iconName = faVolumeMute;
      break;
    case 'play':
      iconName = faPlay;
      break;
    case 'volume-up':
      iconName = faVolumeUp;
      break;
    case 'x-mark':
      iconName = faXmark;
      break;
    case 'search':
      iconName = faMagnifyingGlass;
      break;
    case 'facebook':
      iconName = faFacebookF;
      break;
    case 'instagram':
      iconName = faInstagram;
      break;
    case 'twitter':
      iconName = faTwitter;
      break;
    case 'youtube':
      iconName = faYoutube;
      break;

    default:
      iconName = faQuestionCircle;
      break;
  }

  Icon.propTypes = {
    type: PropTypes.oneOf([
      'chevron-down',
      'volume-mute',
      'play',
      'volume-up',
      'x-mark',
      'search',
      'facebook',
      'instagram',
      'twitter',
      'youtube',
    ]),
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
    opacity: PropTypes.oneOf([
      '0',
      '0.1',
      '0.2',
      '0.3',
      '0.4',
      '0.5',
      '0.6',
      '0.7',
      '0.8',
      '0.9',
      '1',
    ]),
    rotation: PropTypes.oneOf(['0', '90', '180', '270']),
    flip: PropTypes.oneOf(['none', 'horizontal', 'vertical', 'both']),
    spin: PropTypes.bool,
    pulse: PropTypes.bool,
  };

  return (
    <>
      <FontAwesomeIcon icon={iconName} {...props} />
    </>
  );
}
