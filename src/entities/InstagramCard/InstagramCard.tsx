import Image from 'next/image';
import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';

import cls from './InstagramCard.module.scss';
import InstagramIcon from '@public/icons/icon__instagram.svg';

interface InstagramCardProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  img: string;
  id: string;
}

// todo

export const InstagramCard: FC<InstagramCardProps> = ({ img, id }) => {
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
