import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { THeroSlide } from '..';
import cls from './HeroSlide.module.scss';
import { AppLink } from '@/shared';
import ArrowIcon from '@public/icons/icon__arrow.svg';

interface Props
  extends Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      'title' | 'id'
    >,
    THeroSlide {}

export const HeroSlide: FC<Props> = ({ path, image, note, title, text }) => {
  return (
    <div className={cls.slide}>
      <div className={cls.imgContainer}>
        <img className={cls.img} src={image} alt={title} />
      </div>
      <div className={cls.description}>
        <span className={cls.note}>{note}</span>
        <h2 className={cls.title}>{title}</h2>
        <p className={cls.text}>{text}</p>
        <AppLink theme="primary" size="large" href={path} className={cls.link}>
          <span className={cls.linkText}>Shop now</span>
          <ArrowIcon className={cls.linkIcon} />
        </AppLink>
      </div>
    </div>
  );
};
