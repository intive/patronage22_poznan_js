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
  // a workaround to silence the babel loose warnings
  babel: async (options) => {
    const { plugins = [] } = options;
    return {
      ...options,
      plugins: [
        ...plugins,
        [require.resolve('@babel/plugin-proposal-private-property-in-object'), { loose: true }],
      ],
    };
  },
};
