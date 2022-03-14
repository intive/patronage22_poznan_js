import Carousel from 'components/Carousel/index';

export default {
  title: 'UI/Carousel',
  component: Carousel,
  argTypes: {
    numOfChildren: {
      type: 'number',
      defaultValue: 6,
    },
  },
};

const Template = ({ numOfChildren, ...args }) => (
  <Carousel
    {...args}
    movies={Array.from({ length: numOfChildren }, (_, i) => ({ id: i, title: `tile ${i + 1}` }))}
  />
);

export const CarouselDesktop = Template.bind({});
CarouselDesktop.args = {
  viewport: {
    defaultViewport: 'responsive',
  },
  numOfChildren: 10,
};

export const CarouselTablet = Template.bind({});
CarouselTablet.args = {
  viewport: {
    defaultViewport: 'ipad',
  },
  numOfChildren: 10,
};

export const CarouselMobile = Template.bind({});
CarouselMobile.args = {
  viewport: {
    defaultViewport: 'iphonex',
  },
  numOfChildren: 10,
};
