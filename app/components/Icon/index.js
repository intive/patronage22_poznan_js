import React from 'react';
import PropTypes from 'prop-types';
import StyledIcon from './Icon.styles';
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
const iconMap = {
  'chevron-down': faArrowDown,
  facebook: faFacebookF,
  instagram: faInstagram,
  play: faPlay,
  search: faMagnifyingGlass,
  twitter: faTwitter,
  'volume-mute': faVolumeMute,
  'volume-up': faVolumeUp,
  'x-mark': faXmark,
  youtube: faYoutube,
};

export default function Icon({ type, ...props }) {
  const iconName = iconMap[type] || faQuestionCircle;

  return (
    <>
      <StyledIcon as="div" {...props}>
        <FontAwesomeIcon icon={iconName} {...props} />
      </StyledIcon>
    </>
  );
}

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(iconMap)),
  color: PropTypes.string,
  customBackground: PropTypes.string,
  blackBackground: PropTypes.bool,
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