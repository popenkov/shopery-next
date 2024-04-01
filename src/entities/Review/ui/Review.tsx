import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { TPreview } from '../model/interfaces/Review.interface';
import QuoteIcon from '@public/icons/icon__quote.svg';
import cls from './Review.module.scss';
import Image from 'next/image';

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
        <p className={cls.text}>{text}</p>
      </div>
      <div className={cls.author}>
        <div className={cls.photoContainer}>
          <Image className={cls.photo} src={photo} fill alt="author" />
        </div>

        <p className={cls.name}>{name}</p>
        <p className={cls.role}>{role}</p>
      </div>
    </div>
  );
};
