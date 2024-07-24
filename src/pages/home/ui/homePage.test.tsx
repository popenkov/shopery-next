import { render, screen } from '@testing-library/react';
import Page from './index';

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />);

    const page = screen.getByTestId('mainPage');

    expect(page).toBeInTheDocument();
  });
});
