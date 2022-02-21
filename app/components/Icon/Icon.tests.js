import render, { screen } from '../../../testUtils/setup';
import { Default } from './Icon.stories';

import Icon from '.';

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
