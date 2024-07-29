import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Tabs } from './Tabs';

describe('Tabs component', () => {
  it('renders correctly', () => {
    const tabs = [
      { label: 'Tab 1', content: <div>Content 1</div> },
      { label: 'Tab 2', content: <div>Content 2</div> },
    ];
    const { container } = render(<Tabs tabs={tabs} />);
    expect(container).toMatchSnapshot();
  });

  it('renders correct number of tabs', () => {
    const tabs = [
      { label: 'Tab 1', content: <div>Content 1</div> },
      { label: 'Tab 2', content: <div>Content 2</div> },
      { label: 'Tab 3', content: <div>Content 3</div> },
    ];
    const { getAllByRole } = render(<Tabs tabs={tabs} />);
    const tabButtons = getAllByRole('button');
    expect(tabButtons.length).toBe(3);
  });

  it('renders correct content for selected tab', () => {
    const tabs = [
      { label: 'Tab 1', content: <div>Content 1</div> },
      { label: 'Tab 2', content: <div>Content 2</div> },
    ];
    const { getByText } = render(<Tabs tabs={tabs} />);
    expect(getByText('Content 1')).toBeInTheDocument();
  });

  it('switches to correct tab on click', () => {
    const tabs = [
      { label: 'Tab 1', content: <div>Content 1</div> },
      { label: 'Tab 2', content: <div>Content 2</div> },
    ];
    const { getAllByRole, getByText } = render(<Tabs tabs={tabs} />);
    const tabButtons = getAllByRole('button');
    fireEvent.click(tabButtons[1]);
    expect(getByText('Content 2')).toBeInTheDocument();
  });

  it('has correct class names', () => {
    const tabs = [
      { label: 'Tab 1', content: <div>Content 1</div> },
      { label: 'Tab 2', content: <div>Content 2</div> },
    ];
    const { container } = render(<Tabs tabs={tabs} />);
    expect(container.querySelector('.tabs')).toBeInTheDocument();
    expect(container.querySelector('.labels')).toBeInTheDocument();
    expect(container.querySelector('.labelsContent')).toBeInTheDocument();
    expect(container.querySelector('.scrollContainer')).toBeInTheDocument();
    expect(container.querySelector('.label')).toBeInTheDocument();
    expect(container.querySelector('.active')).toBeInTheDocument();
    expect(container.querySelector('.panes')).toBeInTheDocument();
    expect(container.querySelector('.pane')).toBeInTheDocument();
    expect(container.querySelector('.paneContent')).toBeInTheDocument();
  });
});
