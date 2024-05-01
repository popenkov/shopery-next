import { Button } from '@/shared/ui/Buttons';
import { FC } from 'react';

import cls from './AddToCartFromWishlist.module.scss';

export const AddToCartFromWishlist: FC = () => {
    return (
        <Button theme="primary" className={cls.addToCardButton}>
            Add to Cart
        </Button>
    );
};
