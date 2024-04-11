import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import Image from 'next/image';

import { Text } from '@/shared';
import QuoteIcon from '@public/icons/icon__quote.svg';

import cls from './Review.module.scss';
import { TPreview } from '../model/interfaces/Review.interface';


interface Props
  extends Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      'id' | 'role'
    >,
    TPreview {}

export const Review: FC<Props> = ({ text, photo, name, role }) => {
  return (
    <div className={cls.review}>
      <div className={cls.content}>
        <QuoteIcon className={cls.icon} />
        <Text variant="body_m" align="center" className={cls.text}>
          {text}
        </Text>
      </div>
      <div className={cls.author}>
        <div className={cls.photoContainer}>
          <Image className={cls.photo} src={photo} fill alt="author" />
        </div>

        <Text variant="body_m" weight="medium" className={cls.name}>
          {name}
        </Text>
        <Text variant="body_s" className={cls.role}>
          {role}
        </Text>
      </div>
    </div>
  );
};
