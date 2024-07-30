import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Modal } from './Modal';

describe('Modal component', () => {
  it('renders correctly', () => {
    const { container } = render(<Modal isOpen={true}>Modal content</Modal>);
    expect(container).toMatchSnapshot();
  });

  it.skip('calls onClose callback when overlay is clicked', () => {
    const onClose = jest.fn();
    const { getByRole } = render(
      <Modal isOpen={true} onClose={onClose}>
        Modal content
      </Modal>,
    );
    const overlay = getByRole('button');
    fireEvent.click(overlay);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Modal isOpen={true}>Modal content</Modal>);
    expect(getByText('Modal content')).toBeInTheDocument();
  });

  it.skip('has correct class names when isOpen is true', () => {
    const { container, debug } = render(<Modal isOpen={true}>Modal content</Modal>);
    // debug();
    // expect(container.querySelector('.Modal')).toHaveClass('opened');
    expect(container).toHaveClass('opened');
  });

  it.skip('has correct class names when isClosing is true', () => {
    const { container, debug } = render(
      <Modal isOpen={true} onClose={() => {}}>
        Modal content
      </Modal>,
    );
    // debug();
    const overlay = container.querySelector('.Overlay');
    fireEvent.click(container);
    // expect(container.querySelector('.Modal')).toHaveClass('isClosing');
    expect(container).toHaveClass('isClosing');
  });

  it('renders null when lazy is true and isMounted is false', () => {
    const { container } = render(
      <Modal lazy={true} isOpen={false}>
        Modal content
      </Modal>,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('renders correctly when lazy is true and isMounted is true', () => {
    const { container } = render(
      <Modal lazy={true} isOpen={true}>
        Modal content
      </Modal>,
    );
    expect(container).toMatchSnapshot();
  });
});
