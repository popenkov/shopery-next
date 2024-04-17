import { FC } from 'react';

import { Subscription } from '@/features/Subscription';
import cls from './NewsSubscription.module.scss';

export const NewsSubscription: FC = () => {
    return (
        <div className={cls.newsSubscription}>
            <Subscription />
        </div>
    );
};
