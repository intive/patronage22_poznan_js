import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import MovieHero from '.';
import { ButtonAsLink } from 'components/Button/Button.stories';

export default {
  title: 'UI/MovieHero',
  component: MovieHero,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <MovieHero {...args}></MovieHero>;

export const Default = Template.bind({});
Default.args = {
  heroObj: [
    {
      poster_path: 'https://wallpaperaccess.com/full/2191678.jpg',
      title: 'Whiplash',
    },
  ],
};

export const MutedSound = Template.bind({});
MutedSound.args = {
  heroObj: [
    {
      poster_path: 'https://wallpaperaccess.com/full/2191678.jpg',
      title: 'Whiplash',
    },
  ],
};

MutedSound.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const muteIcon = await canvas.getByRole('button', { pressed: false });
  await userEvent.click(muteIcon);
};
