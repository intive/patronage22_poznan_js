import render, { screen, userEvent } from '../../../../testUtils/setup';
import { Primary, Default, CustomColor, Disabled, ButtonAsLink } from './Button.stories';

import Button from '.';

describe('Button', () => {
  it('has the assigned text', () => {
    const text = 'I&apos;m a button';
    render(<Button>{text}</Button>);

    expect(screen.getByRole('button')).toHaveTextContent(text);
  });

  it('calls onClick when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock} />);

    userEvent.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalled();
  });

  it('renders a primary button', () => {
    render(<Primary {...Primary.args} />);

    expect(screen.getByRole('button')).toBeVisible();
    expect(screen.getByRole('button')).toHaveStyleRule('color', '#1f1d2b');
    // TODO: to test the background color of primary button, we need to pull the color in from theme and see if it's set on the button
  });

  it('renders a secondary button', () => {
    render(<Default {...Default.args} />);

    expect(screen.getByRole('button')).toBeVisible();
    expect(screen.getByRole('button')).toHaveStyleRule('background-color', 'rgba(30,27,38,0.24)');
  });

  it('renders a button with custom color', () => {
    render(<CustomColor {...CustomColor.args} />);

    expect(screen.getByRole('button')).toBeVisible();
    expect(screen.getByRole('button')).toHaveStyleRule(
      'background-color',
      CustomColor.args.backgroundColor
    );
  });

  it('renders a disabled button', () => {
    render(<Disabled {...Disabled.args} />);

    expect(screen.getByRole('button')).toBeVisible();
    expect(screen.getByRole('button')).toHaveProperty('disabled', true);
  });

  it('renders the button as a link if href is given', () => {
    render(<ButtonAsLink {...ButtonAsLink.args} />);

    expect(screen.getByRole('link', { name: ButtonAsLink.args.text })).toBeVisible();
    expect(screen.getByRole('link', { name: ButtonAsLink.args.text })).toHaveAttribute(
      'href',
      ButtonAsLink.args.href
    );
  });
});
