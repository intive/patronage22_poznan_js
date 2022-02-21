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

/**
 * Display one of available icon types. Styling can be done using additional params listed below.
 *
 * @param {*} { type, ...props }
 ** type (string): defines icon svg;
 ** color (string): defines icon's color;
 ** size (string): defines icon's size in relation to the current font-size;
 ** opacity (number): defines icon's opacity;
 ** rotation (number): defines icon's rotation;
 ** flip (string): defines icon's horizontal and vertical flip;
 ** spin (boolean): sets icon's spin (smooth) animation;
 ** pulse (boolean): sets icon's pulse (rough) animation;
 *
 */
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
    opacity: PropTypes.oneOf([0, 0.25, 0.5, 0.75, 1]),
    rotation: PropTypes.oneOf([0, 90, 180, 270]),
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
