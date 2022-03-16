import render, { screen } from '../../../../testUtils/setup';

import Input from '.';

describe('Input', () => {
  it('has the given label', () => {
    const label = 'My input';
    render(<Input id="an-input" label={label} />);

    expect(screen.getByText(label)).toBeVisible();
  });

  it('shows an error when there is one', () => {
    const error = 'an error happened';
    render(<Input id="an-input" label="a label" error={error} />);

    expect(screen.getByText(error)).toBeVisible();
  });
});
