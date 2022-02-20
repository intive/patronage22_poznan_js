import render, { screen } from '../../../testUtils/setup';
import { Default } from './Icon.stories';

import Icon from '.';

// TODO tests (for some reason role 'img' can't be found)

describe('Icon', () => {
  it('renders an Icon', () => {
    render(<Icon {...Icon.args} />);

    expect(screen.getByRole('generic')).toBeVisible();
  });
  it('renders a Default Icon', () => {
    render(<Default {...Default.args} />);

    expect(screen.getByRole('generic')).toBeVisible();
  });
});
