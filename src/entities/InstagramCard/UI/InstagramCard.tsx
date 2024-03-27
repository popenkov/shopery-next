import Image from 'next/image';
import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';

import InstagramIcon from '@public/icons/icon__instagram.svg';

import cls from './InstagramCard.module.scss';
import { InstagramCardType } from '..';

interface Props
  extends Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
      'id'
    >,
    InstagramCardType {}

export const InstagramCard: FC<Props> = ({ img, id }) => {
  return (
    <a className={cls.card} href={id}>
      <div className={cls.imgContainer}>
        <Image src={img} alt="alt" className={cls.img} fill />
      </div>
      <div className={cls.overlay}>
        <InstagramIcon className={cls.icon} />
      </div>
    </a>
  );
};
