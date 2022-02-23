import React from 'react';

import Carousel from 'components/Carousel';

export default {
  title: 'UI/Carousel',
  component: Carousel,
  argTypes: {
    numberOfChildren: { type: 'number', defaultValue: 5 },
  },
};

const movies = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' },
  { id: 4, title: 'Item 4' },
  { id: 5, title: 'Item 5' },
  { id: 6, title: 'Item 6' },
  { id: 7, title: 'Item 7' },
  { id: 8, title: 'Item 8' },
  { id: 9, title: 'Item 9' },
  { id: 10, title: 'Item 10' },
];

const Template = ({ numberOfChildren, ...args }) => (
  <Carousel {...args} {...numberOfChildren} movies={movies} />
);

export const CarouselDesktop = Template.bind({});
CarouselDesktop.args = {
  spacing: 2,
  wrap: false,
  direction: 'row',
  overflow: 'hidden',
  numberOfChildren: '5',
};

export const CarouselTablet = Template.bind({});
CarouselTablet.args = {
  spacing: 2,
  wrap: false,
  direction: 'row',
  overflow: 'hidden',
  numberOfChildren: '3',
};

export const CarouselMobile = Template.bind({});
CarouselMobile.args = {
  spacing: 2,
  wrap: false,
  direction: 'row',
  overflow: 'hidden',
  numberOfChildren: '2',
};
