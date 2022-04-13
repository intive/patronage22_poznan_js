import Player from '.';

export default {
  title: 'Player',
  component: Player,
  argTypes: {
    src: {
      options: [
        'https://www.youtube.com/embed/J---aiyznGQ',
        'https://www.youtube.com/embed/BdJKm16Co6M',
        'https://www.youtube.com/embed/vc7_mH2PWHs',
      ],
      control: { type: 'radio' },
    },
    width: {
      options: ['640'],
      control: { type: 'radio' },
    },
    height: {
      options: ['480'],
      control: { type: 'radio' },
    },
  },
};

export const Default = (args) => <Player {...args}></Player>;

Default.args = {
  src: 'https://www.youtube.com/embed/J---aiyznGQ',
  title: 'Some Movie',
  width: '640',
  height: '480',
};
