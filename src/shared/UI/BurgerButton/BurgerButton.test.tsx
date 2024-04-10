import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BurgerButton } from './BurgerButton';

describe('BurgerButton', () => {
    it('renders the button with the correct class names', () => {
        const { getByTestId } = render(<BurgerButton />);

        const button = getByTestId('burger-button');

        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('button');
    });

    it('calls the onClick function when clicked', () => {
        const handleClick = jest.fn();

        const { getByTestId } = render(<BurgerButton onClick={handleClick} />);

        const button = getByTestId('burger-button');

        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
