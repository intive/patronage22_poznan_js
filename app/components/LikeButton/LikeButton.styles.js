import styled from 'styled-components';
import Icon from 'components/UI/Icon';

export const HeartIcon = styled(Icon).attrs(({ isLiked }) => ({
  type: isLiked ? 'heart' : 'heart-outline',
}))``;
