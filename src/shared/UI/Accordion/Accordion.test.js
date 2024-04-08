import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Accordion } from './Accordion';

describe('Accordion', () => {
  it('renders the title and children correctly', () => {
    const { getByText } = render(
      <Accordion title="Test Title">
        <p>Test Content</p>
      </Accordion>
    );

    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('toggles the accordion content when clicked', () => {
    const { getByText, queryByText } = render(
      <Accordion title="Test Title">
        <p>Test Content</p>
      </Accordion>
    );

    const button = getByText('Test Title');
    const content = queryByText('Test Content');

    expect(content).toBeNull();

    fireEvent.click(button);

    expect(getByText('Test Content')).toBeInTheDocument();

    fireEvent.click(button);

    expect(queryByText('Test Content')).toBeNull();
  });

  it('does not render a border when noBorder prop is true', () => {
    const { getByText, container } = render(
      <Accordion title="Test Title" noBorder>
        <p>Test Content</p>
      </Accordion>
    );

    const button = getByText('Test Title');
    const content = getByText('Test Content');

    fireEvent.click(button);

    expect(content.parentElement).toHaveStyle('border: none');
  });
});
