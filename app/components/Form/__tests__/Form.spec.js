import render, { screen } from '../../../../testUtils/setup'; // TODO add aliases

import { Input } from '../index';

describe('Input', () => {
  it('renders given label', () => {
    const label = 'My input';
    render(<Input label={label} />);

    expect(screen.getByText(label)).toBeVisible();
  });
});
