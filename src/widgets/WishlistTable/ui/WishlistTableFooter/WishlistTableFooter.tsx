import { FC } from 'react';

import cls from '../WishlistTable.module.scss';
import { SocialShare } from '@/shared/ui/SocialShare/SocialShare';

export const WishlistTableFooter: FC = () => {
    return (
        <div className={cls.wishlistTableFooter}>
            <SocialShare />
        </div>
    );
};
