import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import Image from 'next/image';

import { InstagramIcon } from '@/shared/ui/icons';

import { type TInstagramCard } from '..';

import cls from './InstagramCard.module.scss';

interface Props
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'id'>,
    TInstagramCard {}

export const InstagramCard: FC<Props> = ({ img, path }) => {
  return (
    <a className={cls.card} href={`instagram.com/${path}`}>
      <div className={cls.imgContainer}>
        <Image src={img} alt={path} className={cls.img} fill />
      </div>
      <div className={cls.overlay}>
        <InstagramIcon className={cls.icon} />
      </div>
    </a>
  );
};
