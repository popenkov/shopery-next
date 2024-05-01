import { RoundButton } from '@/shared/ui/Buttons';
import { FC } from 'react';
import CartIcon from '@public/icons/icon__cart.svg';

export const addToCartFromWishlist: FC = () => {
    return (
        <RoundButton theme="primary">
            <CartIcon />
        </RoundButton>
    );
};
