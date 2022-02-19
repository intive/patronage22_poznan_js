module.exports = {
  stories: ['../app/**/*.stories.{js, jsx}', '../stories/**/*.stories.{js, jsx}'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
