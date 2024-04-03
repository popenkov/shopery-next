import React from 'react';
import cn from 'classnames';

import { getAdvantagesData } from '../api/getAdvantagesData';
import cls from './Advantages.module.scss';
import { AdvantageCard } from '@/entities/AdvantageCard';

export const Advantages = () => {
  const { advantages } = getAdvantagesData();
  return (
    <div className={cls.advantages}>
      <div className={cn(cls.content, 'container')}>
        {advantages.map((item) => {
          return <AdvantageCard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
