module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        minify: false,
      },
    ],
  ],

  env: {
    production: {
      plugins: [['styled-components', { ssr: true, displayName: false, minify: true }]],
    },
  },
};
