import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { SessionProvider } from 'next-auth/react';
import { addDecorator } from '@storybook/react';
import { withReactContext } from 'storybook-react-context';
import AppContext from 'context/app';
import '../styles/fonts.css';
import '../styles/globals.css';

/***
 * De-optimize Next.JS Image since Next isn't serving the public assets when we're inside storybook
 * which we can do by making all instances of next/image have the unoptimized prop
 * */
import * as NextImage from 'next/image';

addDecorator(
  withReactContext({
    Context: AppContext,
    initialState: {
      content: '',
      isModalOpen: false,
      myList: {},
    },
  })
);

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
