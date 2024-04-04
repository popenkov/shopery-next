import React from 'react';

import cn from 'classnames';

import { AdvantageCard } from '@/entities/AdvantageCard';

import cls from './Advantages.module.scss';
import { getAdvantagesData } from '../api/getAdvantagesData';

export const Advantages = () => {
  const { advantages } = getAdvantagesData();
  return (
    <div className={cn(cls.advantages, 'section__green-background')}>
      <div className={cn(cls.content, 'container')}>
        {advantages.map((item) => {
          return <AdvantageCard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
