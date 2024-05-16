import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import Image from 'next/image';

import InstagramIcon from '@public/icons/icon__instagram.svg';

import { TInstagramCard } from '..';

import cls from './InstagramCard.module.scss';

interface Props
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'id'>,
    TInstagramCard {}

export const InstagramCard: FC<Props> = ({ img, id }) => {
  return (
    <a className={cls.card} href={`instagram.com/${id}`}>
      <div className={cls.imgContainer}>
        <Image src={img} alt="alt" className={cls.img} fill />
      </div>
      <div className={cls.overlay}>
        <InstagramIcon className={cls.icon} />
      </div>
    </a>
  );
};
