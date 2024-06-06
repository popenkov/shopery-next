import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import { Accordion } from './Accordion';

describe('Accordion', () => {
  it('renders the title and children correctly', async () => {
    const { getByText, queryByText } = render(
      <Accordion title="Test Title">
        <p>Test Content</p>
      </Accordion>,
    );
    const button = getByText('Test Title');
    const content = queryByText('Test Content');
    await waitFor(() => expect(button).toBeInTheDocument());
    await waitFor(() => expect(content).toBeNull());
  });

  it('toggles the accordion content when clicked', async () => {
    const { getByText, queryByText } = render(
      <Accordion title="Test Title">
        <p>Test Content</p>
      </Accordion>,
    );

    const button = getByText('Test Title');
    const content = queryByText('Test Content');

    await waitFor(() => expect(content).toBeNull());

    fireEvent.click(button);

    await waitFor(() => expect(button).toBeInTheDocument());

    fireEvent.click(button);
    await waitFor(() => expect(content).toBeNull());
  });

  it('render a border when noBorder prop is false', () => {
    const { getByText } = render(
      <Accordion title="Test Title" noBorder>
        <p>Test Content</p>
      </Accordion>,
    );

    const button = getByText('Test Title');

    fireEvent.click(button);

    expect(button.parentElement).toHaveStyle('border: none');
  });
});
