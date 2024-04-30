import React from 'react';

import { AdvantageCard } from '@/entities/AdvantageCard';
import { getAdvantagesData } from '../api/getAdvantagesData';

import cls from './Advantages.module.scss';

export const Advantages = () => {
    const { advantages } = getAdvantagesData();
    return (
        <div className={cls.advantages}>
            <div className={cls.content}>
                {advantages.map((item) => {
                    return <AdvantageCard {...item} key={item.id} />;
                })}
            </div>
        </div>
    );
};
