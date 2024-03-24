import Image from 'next/image';
import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';

import cls from './InstagramCard.module.scss';
import InstagramIcon from '../../../../public/icons/icon__instagram.svg';

interface InstagramCardProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  //   img: string;
  //   title: string;
  //   href: string;
}

// todo

export const InstagramCard: FC<InstagramCardProps> = () => {
  return (
    <a className={cls.card} href="#">
      <div className={cls.imgContainer}>
        <Image
          src="/images/instagram--01.jpg"
          alt="alt"
          className={cls.img}
          fill
        />
      </div>
      <div className={cls.overlay}>
        <InstagramIcon className={cls.icon} />
      </div>
    </a>
  );
};
