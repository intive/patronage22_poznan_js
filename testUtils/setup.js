import '@testing-library/jest-dom';
import { render as RTLRender, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const render = (Component) => RTLRender(Component);

export default render;
export { screen, userEvent, waitFor };
