import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { SessionProvider } from 'next-auth/react';
import '../styles/fonts.css';
import '../styles/globals.css';

/***
 * De-optimize Next.JS Image since Next isn't serving the public assets when we're inside storybook
 * which we can do by making all instances of next/image have the unoptimized prop
 * */
import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
/***
 * End next/image de-optimize
 */

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // layout: 'centered',
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story) => (
    <SessionProvider session={{}}>
      <Story />
    </SessionProvider>
  ),
];
