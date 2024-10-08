import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import Image from 'next/image';

import { TypingText } from '@/shared/lib/utils';
import { QuoteIcon } from '@/shared/ui/icons';
import { Text } from '@/shared/ui/Text';

import { type TReview } from '../../';

import cls from './Review.module.scss';

interface Props
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'id' | 'role'>,
    TReview {}

export const Review: FC<Props> = ({ text, photo, name, role }) => {
  return (
    <div className={cls.review}>
      <div className={cls.content}>
        <QuoteIcon className={cls.icon} />
        <Text variant="body_m" align="center" className={cls.text}>
          <TypingText text={text} />
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
