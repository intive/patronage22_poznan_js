import styled from 'styled-components';

export const IconList = styled.ul`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  margin-left: 0.4rem;
  margin-top: 4rem;
  margin-bottom: 0.5rem;
  font-size: ${({ fontSize }) => fontSize || '1.5rem'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  color: ${({ color }) => color || '#ffffff'};
  list-style-type: none;
`;

export const IconWrapper = styled.li`
  margin-right: 2rem;
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }
`;
