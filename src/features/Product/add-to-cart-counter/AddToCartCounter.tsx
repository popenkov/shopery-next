'use client';

import { FC } from 'react';

import CartIcon from '@public/icons/icon__cart.svg';
import cls from './AddToCartCounter.module.scss';
import { AmountCounter } from '@/shared/ui/AmountCounter/AmountCounter';
import { Button } from '@/shared/ui/Buttons';

export const AddToCartCounter: FC = () => {
    const handleAmountChange = (value: number) => {
        console.log(value);
    };

    const handleButtonClick = () => {
        console.log('handleButtonClick');
    };
    return (
        <div className={cls.AddToCartCounter}>
            <AmountCounter
                value={5}
                onChange={handleAmountChange}
                className={cls.AddToCartCounterAmount}
            />
            <Button
                size="large"
                className={cls.AddToCartCounterCartButton}
                onClick={handleButtonClick}
            >
                Add to Cart
                <CartIcon className={cls.AddToCartCounterCartButtonIcon} />
            </Button>
        </div>
    );
};
