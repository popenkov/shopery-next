import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { AppLink } from 'shared/ui/AppLink';
import { ArrowIcon } from 'shared/ui/icons';
import { Text } from 'shared/ui/Text';

import { THeroSlide } from '..';

import cls from './HeroSlide.module.scss';

interface Props
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'title' | 'id'>,
    THeroSlide {}

export const HeroSlide: FC<Props> = ({ path, image, note, title, text }) => {
  return (
    <div className={cls.slide}>
      <div className={cls.imgContainer}>
        <img className={cls.img} src={image} alt={title} />
      </div>
      <div className={cls.description}>
        <span className={cls.note}>{note}</span>
        <Text variant="heading_1" weight="semibold" className={cls.title} as="h2">
          {title}
        </Text>
        <Text variant="body_l" className={cls.text}>
          {text}
        </Text>
        <AppLink theme="primary" size="large" href={path} className={cls.link}>
          <span className={cls.linkText}>Shop now</span>
          <ArrowIcon className={cls.linkIcon} />
        </AppLink>
      </div>
    </div>
  );
};
