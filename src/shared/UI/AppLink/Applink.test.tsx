import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AppLink } from './AppLink';

describe('AppLink', () => {
    it('renders the link with the correct href and theme', () => {
        const { getByText } = render(
            <AppLink href="/test" theme="primary">
                Test Link
            </AppLink>,
        );

        const link = getByText('Test Link');

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/test');
        expect(link).toHaveClass('link primary');
    });

    it('renders the link with the correct size', () => {
        const { getByText } = render(
            <AppLink href="/test" size="large">
                Test Link
            </AppLink>,
        );

        const link = getByText('Test Link');

        expect(link).toHaveClass('link large');
    });

    it('calls the onClick function when clicked', () => {
        const handleClick = jest.fn();
        const { getByText } = render(
            <AppLink href="/test" onClick={handleClick}>
                Test Link
            </AppLink>,
        );

        const link = getByText('Test Link');

        fireEvent.click(link);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
